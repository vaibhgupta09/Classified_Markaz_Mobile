import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio, TextInput,
    Text, TouchableOpacity, ActivityIndicator, Dimensions,FlatList,
    View, ScrollView,
    Image
} from 'react-native';
import email from '../assets/email.png'
import close from '../assets/close.png'
import back from '../assets/back.png'
import link from '../assets/link.png'
import noimage from '../assets/noimage.png'
import Ad from '../assets/Ad.png'
import Cal from '../assets/Cal.png'
import Km from '../assets/Km.png'
import Doors from '../assets/Doors.png'
import Color from '../assets/Color.png'
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
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';
import OtpInputs from 'react-native-otp-inputs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
export default class DetailScreen extends PureComponent {

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
                        <View style={{ height: height / 3, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
                            <Image source={noimage} style={{ height: '50%', width: '50%', resizeMode: 'contain' }} />
                        </View>

                        <View style={{ width: width, flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '50%', marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                                Best Price of the Car Atima 2016 Urgent!
                       </Text>
                            <View style={{ width: '40%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                    28,000
                       </Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey' }}>
                                    AED
                       </Text>
                            </View>
                        </View>
                        <Text style={{fontSize:12,color:'grey',marginTop:10,marginLeft:10}}>
                            Motors | Used cars | Altima | Nissan
                       </Text>

                       <View style={{flexDirection:'row',marginTop:10,width:width}}>
                       <View style={{width:'50%'}}>
                       <Text style={{fontSize:12,color:'grey',marginTop:10,marginLeft:10}}>
                           1456 Views
                       </Text>
                       <Text style={{fontSize:12,color:'grey',marginTop:10,marginLeft:10}}>
                           14 hours Ago
                       </Text>
                       </View>
                       <View style={{width:'50%',justifyContent:'flex-end',alignItems:'flex-end'}}>
                       <Image source={Ad} style={{width:80,height:80,resizeMode:'contain',marginRight:20}}/>
                       </View>

                       </View>

                        <View style={{flexDirection:'row',width:width,height:height/5}}>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Cal} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>Year</Text>
                            <Text style={{fontSize:13,fontWeight:'bold',marginTop:5,color:'grey'}}>Year</Text>

                          </View>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Km} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>Kilometer</Text>
                            <Text style={{fontSize:13,fontWeight:'bold',marginTop:5,color:'grey'}}>189,000</Text>

                          </View>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Doors} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>Doors</Text>
                            <Text style={{fontSize:13,fontWeight:'bold',marginTop:5,color:'grey'}}>4 Doors</Text>

                          </View>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Color} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>Color</Text>
                            <Text style={{fontSize:13,fontWeight:'bold',marginTop:5,color:'grey'}}>Black</Text>

                          </View>

                        </View>

                         <Text style={{fontSize:11,fontWeight:'bold',color:'grey',marginTop:10,textAlign:'center'}}>Show More Detail</Text>
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
                         <Text style={{fontSize:14,fontWeight:'bold',color:'grey',marginTop:15,textAlign:'center'}}>LOCATION</Text>
                         <Text style={{fontSize:12,color:'grey',marginTop:5,textAlign:'center',marginLeft:10,marginRight:10}}>
                       UAE | Sharajah | University city
                         </Text>
                         <Image source={Map} style={{width:width,height:height/2.5,marginTop:10}}/>
                         <View style={{width:width-30,marginLeft:15,marginRight:15,marginTop:15,backgroundColor:'grey',height:1}}/>
                         <View style={{width:width,marginTop:10,flexDirection:'row'}}>
                           <View style={{width:'50%'}}>
                           <Image source={Ad} style={{marginLeft:15,width:80,height:80,resizeMode:'contain',marginRight:20}}/>
                           </View>
                           <View style={{width:'50%',justifyContent:'center',alignItems:'flex-end'}}>
                           <Text style={{marginRight:15,fontSize:14,fontWeight:'bold',color:'grey',textAlign:'center'}}>12 Reviews (4.1)</Text>
                           <Image source={Star} style={{marginRight:15,height:20,width:60,resizeMode:'contain'}}/>
                           </View>
                         </View>
                            <View style={{justifyContent:'center',alignItems:'center',width:width}}>
                          <Text style={{fontSize:12,fontWeight:'bold',color:'grey',marginTop:10,textAlign:'center'}}>Rate this listed items</Text>
                          <Image source={Star} style={{height:30,width:150,marginTop:10}}/>
                          </View>
                          <View style={{height:width/3,borderColor:'grey',borderWidth:1,width:width-40,marginRight:20,marginLeft:20,marginTop:15,borderRadius:5}}>
                          <TextInput
                            style={{height: 40,marginLeft:10,fontSize:14,marginTop:10}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder={'Add your review (max 100 characters)'}
                        />
                          </View>

                          <FlatList
                            data={[{key: 'a'}, {key: 'b'}]}
                            renderItem={({item}) => <View style={{height:width/3,borderColor:'grey',borderWidth:1,width:width-40,marginRight:20,marginLeft:20,marginTop:15,borderRadius:5}}>
                             <View style={{flexDirection:'row',width:'100%',height:'100%'}}>
                              <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:'25%'}}>
                               <Image source={pro} style={{height:40,width:40}}/>
                              </View>
                              <View style={{justifyContent:'center',height:'100%',width:'75%'}}>
                              <Text style={{fontSize:12,fontWeight:'bold',color:'grey',marginTop:10}}>User name</Text>
                              <Image source={Star} style={{height:20,width:60,resizeMode:'contain'}}/>
                              <Text style={{fontSize:12,fontWeight:'bold',color:'grey',marginTop:10}}>Great product as per the expectations awesome...!</Text>
                              </View>
                              
                             </View>
                            </View>}
                            />




                    </View>

                </ScrollView>

                        <View style={{flexDirection:'row',width:width,height:60}}>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Sms} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>SMS</Text>
                           

                          </View>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Msg} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>MESSAGE</Text>
                           
                          </View>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={What} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>WHATSAPP</Text>
                          

                          </View>
                          <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={Call} style={{width:30,height:30,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:5,color:'grey'}}>CALL NOW</Text>
                           

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