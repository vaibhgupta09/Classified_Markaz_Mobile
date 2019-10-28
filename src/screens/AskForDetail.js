import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio, TextInput,
    Text, TouchableOpacity, ActivityIndicator, Dimensions,FlatList,
    View, ScrollView,
    Image
} from 'react-native';
import download from '../assets/Download.png'
import sent from '../assets/Sent.png'
import email from '../assets/email.png'
import close from '../assets/close.png'
import back from '../assets/back.png'
import link from '../assets/link.png'
import noimage from '../assets/noimage.png'
import Ad from '../assets/Ad.png'
import Cal from '../assets/Sal.png'
import Km from '../assets/Edu.png'
import Doors from '../assets/Exp.png'
import Color from '../assets/Comm.png'
import Map from '../assets/Map.png'
import Star from '../assets/Star.png'
import Call from '../assets/Call.png'
import What from '../assets/Wats.png'
import Msg from '../assets/Msg.png'
import Sms from '../assets/Sms.png'
import Dil from '../assets/Dil.png'
import Share from '../assets/share.png'
import Det from '../assets/Det.png'
import pro from '../assets/pro.png'
import Submit from '../assets/Submit.png'
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';
import OtpInputs from 'react-native-otp-inputs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
export default class AskForDetail extends PureComponent {

    constructor() {
        super()
        this.state = {
            logintxt: ''

        };

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%', height: 55, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={back} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <View style={{ width: '80%', height: '100%', justifyContent: 'flex-end', alignItems: 'center',flexDirection:'row' }}>

                    <Image source={Share} style={{ width: 30, height: 30,resizeMode:'contain' }} />
                  <Image source={Det} style={{ width: 30, height: 30,marginLeft:25,resizeMode:'contain' }} />
                        <Image source={Dil} style={{ width: 30, height: 30,marginLeft:25,resizeMode:'contain' ,marginRight:10}} />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        

                        <View style={{ width: width, flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '100%', marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                                Expert Accounting advisors
                       </Text>
                           
                        </View>
                        <View style={{flexDirection:'row',marginTop:10,width:width}}>
                       <View style={{width:'50%'}}>
                       <Text style={{fontSize:12,color:'grey',marginTop:10,marginLeft:10}}>
                            Cumminity | Job Wanted
                       </Text>
                       <Text style={{fontSize:12,color:'grey',marginTop:10,marginLeft:10}}>
                           14 hours Ago
                       </Text>
                      
                       </View>
                       <View style={{width:'50%',justifyContent:'flex-end',alignItems:'flex-end'}}>
                      
                       </View>

                       </View>

                       <View style={{marginTop:10,flexDirection:'row',width:width,justifyContent:'center',alignItems:'center'}}>
                           <View style={{width:'40%',height:40,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:3}}>
                           <Text style={{fontSize:12,color:'grey',fontWeight:'bold'}}>
                           Download Attachment  
                         </Text>
                           </View>
                           <View style={{width:'15%',height:40,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:3,backgroundColor:'lightgrey'}}>
                          <Image source={download} style={{width:20,height:20}}/>
                           </View>
                           <View style={{width:'15%',height:40,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:3,backgroundColor:'lightgrey'}}>
                          <Image source={sent} style={{width:20,height:20}}/>
                           </View>
                       </View>
                      
                        

                      

                      

                        
                         <View style={{width:width-30,marginLeft:15,marginRight:15,marginTop:15,backgroundColor:'grey',height:1}}/>
                         <Text style={{fontSize:14,fontWeight:'bold',color:'grey',marginTop:15,textAlign:'center'}}>DESCRIPTION</Text>
                         <Text style={{fontSize:12,color:'grey',marginTop:5,textAlign:'center',marginLeft:10,marginRight:10}}>
                         Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem 
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                            dolores eos qui ratione voluptatem sequi nesciunt.
                         </Text>
                         <View style={{width:width-30,marginLeft:15,marginRight:15,marginTop:15,backgroundColor:'grey',height:1}}/>
                         <Text style={{fontSize:14,fontWeight:'bold',color:'grey',marginTop:15,textAlign:'center'}}>FILL BELOW INPUT TO SUBMIT</Text>
                         <TextInput
                        style={{height: 40, borderBottomColor: 'gray', borderBottomWidth:1,width:width-40,marginLeft:15,marginRight:15,marginTop:20,fontSize:16}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder={"Attach Document/Proposal"}
                    />
                     <TextInput
                        style={{height: 40, borderBottomColor: 'gray', borderBottomWidth:1,width:width-40,marginLeft:20,marginRight:20,marginTop:15,fontSize:16}}
                        onChangeText={(text1) => this.setState({text1})}
                        value={this.state.text1}
                        placeholder={"Details/Description"}
                    />
                        


                    </View>

                </ScrollView>

                        <View style={{flexDirection:'row',width:width,height:60}}>
                         
                          <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Msg} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>MESSAGE</Text>
                           
                          </View>
                          <View style={{width:'60%',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Submit} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey',marginLeft:10}}>SUBMIT QUOTATIONI</Text>
                          

                          </View>
                         

                        </View>

            </View>


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