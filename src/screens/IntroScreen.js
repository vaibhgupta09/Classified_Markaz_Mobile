import React, { PureComponent } from 'react';
import {
  Platform,Alert,
  StyleSheet,PixelRatio,
  Text,TouchableOpacity,ActivityIndicator,
  View,
  Image
} from 'react-native';
import AppIntro from 'react-native-app-intro';
import noimage from '../assets/noimage.png';
import {Router,Stack,Actions} from 'react-native-router-flux';

export default class IntroScreen extends PureComponent {

  constructor() {
    super()
    this.state = {
  
    };
  
  }
  onSkipBtnHandle = (index) => {
  //  Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
   // Alert.alert('Done');
   Actions.push("LoginScreen");
  }
  nextBtnHandle = (index) => {
  //  Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    const pageArray = [{
        img: noimage,
        title: 'Search Anything BUY & RENT',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam.',
        
        
        imgStyle: {
          height: 60 * 2.5,
          width: 109 * 2.5,
          resizeMode:'contain'
        },
        backgroundColor: '#26B9FA',
        fontColor: '#fff',
        level: 10,
      }, 
      {
        img: noimage,
        title: 'Sell Anything You want',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam.',
        
        
        imgStyle: {
          height: 60 * 2.5,
          width: 109 * 2.5,
          resizeMode:'contain'
        },
        backgroundColor: '#FFC62B',
        fontColor: '#fff',
        level: 10,
      },
      {
        img: noimage,
        title: 'GET FREE FEATURED ADS',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam.',
        
        
        imgStyle: {
          height: 60 * 2.5,
          width: 109 * 2.5,
          resizeMode:'contain'
        },
        backgroundColor: '#FF2B64',
        fontColor: '#fff',
        level: 10,
      },
      {
        img: noimage,
        title: 'AUCTION Place Your BID',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam.',
        
        
        imgStyle: {
          height: 60 * 2.5,
          width: 109 * 2.5,
          resizeMode:'contain'
        },
        backgroundColor: '#2ED59B',
        fontColor: '#fff',
        level: 10,
      },
      {
        img: noimage,
        title: 'COMMUNITY For Services',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam.',
        
        
        imgStyle: {
          height: 60 * 2.5,
          width: 109 * 2.5,
          resizeMode:'contain'
        },
        backgroundColor: '#555AD3',
        fontColor: '#fff',
        level: 10,
      }
    ];
    return (
        <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
       
      />
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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