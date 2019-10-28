import React, { PureComponent } from 'react';
import { Google, GoogleSignin, statusCodes } from 'react-native-google-signin';
import {
  Platform,
  StyleSheet,PixelRatio,TextInput,Dimensions,
  Text,TouchableOpacity,ActivityIndicator,AsyncStorage,
  View,
  Image
} from 'react-native';
import defaultlogo from '../assets/defaultlogo.png'
import gmail from '../assets/gmail.png'
import fb from '../assets/fb.png'
import link from '../assets/link.png'
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
import {Toast} from 'native-base';
import URL from '../constant/URL';

export default class LoginScreen extends PureComponent {

  constructor() {
    super()
    this.state = {
      logintxt:'',
      isLogin:true
    };
    this.loginType = '';
  }

  onLogin=()=>{
      let formdata = new FormData();
      if(this.loginType == 'email')
      {
        formdata.append("email",this.state.logintxt);
        formdata.append("phone","");
      } else {
        formdata.append("email","");
        formdata.append("phone",this.state.logintxt);
      }

      formdata.append("login_by",this.loginType);
      formdata.append("device_token","");
      formdata.append("lat","");
      formdata.append("lng","");

      //http://cms.drafterx.com/public/api/v1/services/Auth/login
      //http://drafterx.com/classifiedmarkazapp/public/api/v1/login
      fetch('http://cms.drafterx.com/public/api/v1/services/Auth/login',{
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
          console.log(responseJson.otp_token);
          AsyncStorage.setItem('otp_token',""+JSON.stringify(responseJson.otp_token))
          AsyncStorage.setItem('LoginType',""+JSON.stringify(this.loginType))
          AsyncStorage.setItem('UserInfo',""+JSON.stringify(this.state.logintxt))
          Actions.push('OTPScreen');
        } else {
          //this.register();
          console.warn(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

 

  validate()
  {
    //AsyncStorage.setItem('LoginType',""+JSON.stringify("phone"))
    //AsyncStorage.setItem('UserInfo',""+JSON.stringify("+919988776655"))
    //Actions.push('OTPScreen');
    if(this.state.logintxt=='' || this.state.logintxt==null)
    {
      Toast.show({
        text: 'Please enter email or phone',
        type:'danger'
      });
    } else {
      if(this.state.logintxt.charAt(0) == '+') {
        let num = this.state.logintxt.replace(".", '');
        if(isNaN(num)) {
          Toast.show({
            text: 'Please enter correct phone number',
            type:'danger'
          });
        } else {
          this.loginType = 'phone';
          this.onLogin();
        }
      } else {
        if(this.state.logintxt.charAt(0) != '+') {
          let num = this.state.logintxt.replace(".", '');
          if(isNaN(num)) {
            let validEmail = this.validateEmail(this.state.logintxt);
            if(validEmail == true) {
              this.loginType = 'email';
              this.onLogin();
            } else {
              Toast.show({
                text: 'Please enter correct email address',
                type:'danger'
              });
            }
          } else {
            Toast.show({
              text: 'Please add country code',
              type:'danger'
            });
          }
        }
      }
    }
  }

  validateEmail(email)
  {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      return true
    } else {
      return false
    }
  }

  navigate()
  {
    var str = this.state.logintxt;
    var search = str.search(/\+/);
     if(search==0)
     {
       Actions.push('OTPScreen',{value:'Phone'});
     }
     else{
      Actions.push('OTPScreen',{value:'Email'});
     }
  }

  fbLogin()
  {

  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        "199464763646-0pfcb3s6oq5aq02gc7huuu1qhotjgi7g.apps.googleusercontent.com"
    });
  }

  gmailLogin = async () =>
  {
    console.warn("Gmail Login Tapped ");
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true
      });
      const userInfo = await GoogleSignin.signIn();
      this.setState({ isLoading: true});
      this.addData(userInfo.user, "Google");
      console.warn("first_name", "" + userInfo.user.givenName);
      console.warn("last_name", "" + userInfo.user.familyName);
      console.warn("profilepictureUrl", "" + userInfo.user.photo);
      console.warn("user_email", "" + userInfo.user.email);
      this.setState({ isLoading: false });
    } catch (error) {
      console.warn(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };
 addData(user,type){
  let formdata = new FormData();
  formdata.append("device_token", 'token');
  formdata.append("email", user.email);
  formdata.append("login_with", type);
  formdata.append("first_name", user.givenName);
  formdata.append("last_name", user.familyName);
  formdata.append("profile_pic", user.photo);


  fetch('http://cms.drafterx.com/public/api/v1/services/Auth/social_login',{
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formdata
    })
  .then((response) => response.json())
  .then((responseJson) => {

    if(responseJson.status==200)
    {
      AsyncStorage.setItem('sessionId',""+responseJson.sessionId)
      Actions.push('Tabs');
    }
    else{
      alert(responseJson.message);
    }

  })
  .catch((error) => {
    console.error(error);
  });

 }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
       <View style={{width:width,height:height}}>
          <View style={{width:'100%',height:'40%',backgroundColor:null,justifyContent:'center',alignItems:'center'}}>
            <Image source={defaultlogo} style={{height:'50%',width:'50%',resizeMode:'contain'}}/>
            <View style={{width:width,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>this.setState({isLogin:true})}>
              <Text style={{fontSize:24,marginTop:20,color:'grey',fontWeight:'bold'}}>LOGIN |</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({isLogin:false})}>
              <Text style={{fontSize:24,marginTop:20,color:'grey',fontWeight:'bold'}}> SIGN UP </Text>

              </TouchableOpacity>

            </View>
          </View>
          {this.state.isLogin?
            <View style={{width:'100%',height:'30%',backgroundColor:null,justifyContent:'center',alignItems:'center'}}>
            <TextInput
            style={{height: 50,width:'80%',borderBottomColor:'grey',borderBottomWidth:1,fontSize:18,marginBottom:25}}
            onChangeText={(logintxt) => this.setState({logintxt})}
            placeholder={'(+code) Mobile number or Email'}
            value={this.state.logintxt}
          />
          <TouchableOpacity onPress={()=>this.validate()} style={{width:'45%',height:'20%',borderRadius:10,borderWidth:1,borderColor:'grey',backgroundColor:'#f5f5f5',marginTop:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:'grey'}}>LOGIN NOW</Text>
          </TouchableOpacity>
          <Text style={{fontSize:12,color:'grey',marginTop:10}}>We will send you a One Time Password to verify.</Text>

            </View> :
             <View style={{width:'100%',height:'30%',backgroundColor:null,justifyContent:'center',alignItems:'center'}}>
             <TextInput
             style={{height: 50,width:'80%',borderBottomColor:'grey',borderBottomWidth:1,fontSize:18,marginBottom:10}}
             onChangeText={(name) => this.setState({name})}
             placeholder={'Enter full name'}
             value={this.state.name}
           />
            <TextInput
             style={{height: 50,width:'80%',borderBottomColor:'grey',borderBottomWidth:1,fontSize:18,marginBottom:10}}
             onChangeText={(phone) => this.setState({phone})}
             placeholder={'Enter phone number'}
             value={this.state.phone}
           />
            <TextInput
             style={{height: 50,width:'80%',borderBottomColor:'grey',borderBottomWidth:1,fontSize:18,marginBottom:10}}
             onChangeText={(email) => this.setState({email})}
             placeholder={'Enter Email address'}
             value={this.state.email}
           />
           <TouchableOpacity style={{width:'45%',height:'20%',borderRadius:10,borderWidth:1,borderColor:'grey',backgroundColor:'#f5f5f5',marginTop:20,justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:16,color:'grey'}}>SIGN UP NOW</Text>
           </TouchableOpacity>
          </View>
        }

       <View style={{flexDirection:'row',width:'100%',marginTop:40,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:'28%',height:1,backgroundColor:'grey'}}/>
          <Text style={{marginLeft:5,marginRight:5,fontSize:14,color:'grey'}}>SIGNUP WITH</Text>
          <View style={{width:'28%',height:1,backgroundColor:'grey'}}/>

       </View>
       <View style={{flexDirection:'row',width:'100%',marginTop:10,justifyContent:'center',alignItems:'center',height:'10%'}}>
       <TouchableOpacity onPress={()=>this.fbLogin()} style={{width:'30%',height:'80%',resizeMode:'contain',marginTop:10}}>
       <Image source={fb}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.gmailLogin()} style={{width:'30%',height:'80%',resizeMode:'contain',marginTop:10}}>
       <Image source={gmail}/>
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
