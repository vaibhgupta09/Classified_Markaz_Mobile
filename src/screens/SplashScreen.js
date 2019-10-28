import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,PixelRatio,
  Text,TouchableOpacity,ActivityIndicator,
  View,
  Image
} from 'react-native';
import applogo from '../assets/logo.png';
import girl from '../assets/girl.png';
import {Router,Stack,Actions} from 'react-native-router-flux';

export default class SplashScreen extends PureComponent {

  constructor() {
    super()
    this.state = {  
  
    };
 
  }
  componentDidMount () {
    setTimeout(() => {
      Actions.push("IntroScreen");
    }, 2000)
  }

  render() {
    return (
       <View style={styles.container}>
        
         <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>    
         <Image source={girl} style={{width:'100%',height:'100%'}}/>
         </View>
         <View style={{width:'100%',height:'20%',justifyContent:'center',alignItems:'center',position:'absolute'}}>
         <Image source={applogo} style={{width:'80%',height:'80%',resizeMode:'contain'}}/>
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