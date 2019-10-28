import React, { Component } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import {
    Platform,
    StyleSheet, PixelRatio, TextInput,
    Text, TouchableOpacity, ActivityIndicator, Dimensions, AsyncStorage,
    View, ScrollView,
    Image
} from 'react-native';
import email from '../assets/email.png'
import close from '../assets/close.png'
import back from '../assets/back.png'
import link from '../assets/link.png'
import phone from '../assets/phone.png'

import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';
import OtpInputs from 'react-native-otp-inputs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height

class TimerInput extends React.Component {
  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 20,justifyContent:'flex-end',alignItems:'flex-end' }}>
        <Text style={{fontSize:14,color:'grey', textAlign: 'right',marginTop:20,marginRight:15}}>{this.props.value}:{this.props.seconds} Time Left</Text>
      </View>
    );
  }
}

 class StartButton extends React.Component {
   render() {
     return (
       <View>
        <Text></Text>
       </View>
     );
   }
 }

export default class OTPScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: '',
            text: '',
            TextInputDisableStatus: true,
            seconds: '00',
            minutes: '05'
        };

        this.loginType = '';
        this.secondsRemaining;
        this.intervalHandle;
        this.handleChange = this.handleChange.bind(this);
        this.tick = this.tick.bind(this);
        this.props.value = 5;
    }

    handleChange(event) {
       this.setState({
         minutes: event.target.value
       })
    }

    tick() {
      var min = Math.floor(this.secondsRemaining / 60);
      var sec = this.secondsRemaining - (min * 60);
      this.setState({
        minutes: min,
        seconds: sec
      })
      if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds,
        })
      }
      if (min < 10) {
      this.setState({
        value: "0" + min,
       })
      }
      if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
      }
      this.secondsRemaining--
    }

    startCountDown() {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.minutes;
      this.secondsRemaining = time * 60;
    }

    verifyLogin = () => {

      AsyncStorage.getItem('otp_token', (err, value) => {
          if (err) {
              console.log(err)
          } else {
              let formdata = new FormData();
              formdata.append("otp_token",JSON.parse(value));
              formdata.append("verify_otp",this.state.code);
              fetch('http://cms.drafterx.com/public/api/v1/services/Auth/verify_token',{
                method: 'POST',
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                body:formdata
                })
              .then((response) => response.json())
              .then((responseJson) => {
               console.log(responseJson);
                if(responseJson.status == 200)
                {
                  console.log(responseJson.sessionId);
                  AsyncStorage.setItem('sessionId',""+JSON.stringify(responseJson.sessionId))
                  Actions.push('Tabs');
                } else {
                  console.warn(responseJson);
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
      })
    }

    resendAgain() {
      clearInterval(this.intervalHandle);
      this.props.value = 5;
      this.startCountDown();
    }

    componentWillMount() {
      this.startCountDown();
      AsyncStorage.getItem('LoginType', (err, loginType) => {
          if (err) {
              console.log(err)
          } else {
            let loginValue = JSON.parse(loginType);
            AsyncStorage.getItem('UserInfo', (err, userInfo) => {
                if (err) {
                    console.log(err)
                } else {
                  if(loginValue == 'email') {
                    this.loginType = "Email";
                    let email = JSON.parse(userInfo);
                    //var string = "+91123456789";
                    let index = 1
                    this.text = "Please type the 4 digit Verification code sent on " + email.slice(0, index) + "****" + email.slice(index+3);
                    console.warn(this.text);
                  } else {
                    this.loginType = "Phone";
                    let phoneNum = JSON.parse(userInfo);
                    //var string = "+91123456789";
                    let index = 5
                    this.text = "Please type the 4 digit Verification code sent on " + phoneNum.slice(0, index) + "XXXX" + phoneNum.slice(index+4);
                    console.warn(this.text);
                  }
                }
            })
          }
        })
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <View style={{ width: width, height: height }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={back} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        </View>
                        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={close} style={{ width: 30, height: 30 }} />
                        </View>
                    </View>

                    <View style={{ width: '100%', height: '40%', backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>
                       {this.loginType=="Phone"? <Image source={phone} style={{ height: '30%', width: '30%', resizeMode: 'contain' }} />: <Image source={email} style={{ height: '50%', width: '50%', resizeMode: 'contain' }} />}
                        <Text style={{ fontSize: 26, marginTop: 10, color: 'grey', fontWeight: 'bold' }}>Verification Code</Text>
                        <Text style={{ fontSize: 14, color: 'grey', marginTop: 15, marginBottom: 10, width: '80%' }}>{(this.text)}</Text>

                    </View>
                    <View style={{ width: '100%', height: '15%', backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>
                        <OtpInputs
                            handleChange={code => this.setState({code})}
                            numberOfInputs={4}
                            inputStyles={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}
                            inputContainerStyles={{ width: '16%',height:80 ,justifyContent: 'center', alignItems: 'center' }}
                            placeholder='.'
                        />
                        <TimerInput value={this.state.value} handleChange={this.handleChange} />
                        <Timer value={this.state.value} seconds={this.state.seconds} />
                   </View>

                    <View style={{ width: '100%', height: '20%', backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>

                      <TouchableOpacity onPress={()=>this.resendAgain()}>
                        <Text style={{ fontSize: 12, color: 'grey', marginTop: 20, textAlign: 'center' }}>Did'nt Recieve OTP? Resend Now</Text>
                      </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.verifyLogin()} style={{ width: '45%', height: '30%', borderRadius: 10, borderWidth: 1, borderColor: 'grey', backgroundColor: '#f5f5f5', marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'grey' }}>VERIFY NOW</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </KeyboardAwareScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
    },
    results: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {

        width: 300,
        height: 300
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 100
    },
});
