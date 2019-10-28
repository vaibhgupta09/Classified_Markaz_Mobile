import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio,
    Text, TouchableOpacity, ActivityIndicator,
    View,Dimensions,
    Image
} from 'react-native';
import Menubar from '../assets/Menubar.png';
import Contact from '../assets/Contact.png';
import Faq from '../assets/Faq.png';
import T_c from '../assets/T_C.png';
import About from '../assets/About.png';
import PropTypes from 'prop-types';

import SideMenu from 'react-native-side-menu';

import { Router, Stack, Actions } from 'react-native-router-flux';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default function Menu({ onItemSelected }) {
    return (
     
     
      <View  style={styles.animatedBox}>
            <View style={{height:'21%',width:'100%',justifyContent:'center',alignItems:'center',marginTop:20}}>
              <View style={{width:70,height:70,borderRadius:35,justifyContent:'center',alignItems:'center',backgroundColor:'#E5E0E0'}}>
              <Image source={Contact} style={{width:40,height:40,resizeMode:'contain'}}/>   
              </View>
              <Text style={{fontSize:11,color:'#605F5F',marginTop:10}}>Contact Us</Text>
            </View>
            <View style={{height:'21%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <View style={{width:70,height:70,borderRadius:35,justifyContent:'center',alignItems:'center',backgroundColor:'#E5E0E0'}}>
              <Image source={Faq} style={{width:40,height:40,resizeMode:'contain'}}/>   
              </View>
              <Text style={{fontSize:11,color:'#605F5F',marginTop:10}}>FAQ</Text>
            </View>
            <View style={{height:'21%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <View style={{width:70,height:70,borderRadius:35,justifyContent:'center',alignItems:'center',backgroundColor:'#E5E0E0'}}>
              <Image source={T_c} style={{width:40,height:40,resizeMode:'contain'}}/>   
              </View>
              <Text style={{fontSize:11,color:'#605F5F',marginTop:10}}>Terms & Conditions</Text>
            </View>
            <View style={{height:'21%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <View style={{width:70,height:70,borderRadius:35,justifyContent:'center',alignItems:'center',backgroundColor:'#E5E0E0'}}>
              <Image source={About} style={{width:40,height:40,resizeMode:'contain'}}/>   
              </View>
              <Text style={{fontSize:11,color:'#605F5F',marginTop:10}}>About MARKAZ</Text>
            </View>

           
              
            </View>
            );
  }
  
  Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
  };
  
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
    },
    animatedBox: {
       height:height-80,
       width:width/3,
        backgroundColor: "#F5F5F5",
        padding: 10
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F04812'
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