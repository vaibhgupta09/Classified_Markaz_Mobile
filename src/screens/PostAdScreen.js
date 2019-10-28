import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet, PixelRatio, TextInput,
  Text, TouchableOpacity, ActivityIndicator, ScrollView, FlatList,KeyboardAvoidingView,
  View,
  Image, Dimensions
} from 'react-native';
import noimage from '../assets/City.png'
import back from '../assets/back.png'

import property from '../assets/Property.png';
import Motor from '../assets/Motor.png';
import Mobile from '../assets/Mobile.png';
import Electronic from '../assets/Electronic.png';
import down from '../assets/down.png';
import Map from '../assets/Map.png';
import prop from '../assets/prop.png';
import Feature from '../assets/Feature.png';
import Free from '../assets/Free.png';
import Sofa from '../assets/Sofa.png';
import Ref from '../assets/Ref.png';
import Com from '../assets/Com.png';
import Rent from '../assets/Rent.png';
import { Icon, CheckBox,Toast } from 'native-base'
import Imageadd from '../assets/Imageadd.png';
import { Router, Stack, Actions } from 'react-native-router-flux';
import close from '../assets/close.png'
import StepIndicator from 'react-native-step-indicator';
const labels = ["Location", "Category", "Details","Post Ad","Finished"];
const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 20,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#e4717a',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#e4717a',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#e4717a',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#e4717a',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#898989',
  labelSize: 11,
  labelFontFamily: 'OpenSans-Regular',
  currentStepLabelColor: '#e4717a',

}
import Forms from './Forms'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
import {Categories} from '../constant/categories';
export default class PostAdScreen extends PureComponent {

  constructor() {
    super();
    this.state = {
      currentPosition: 0,
      selectTab: 'CLASSIFIED',
      countriesData:[],
      countriesLoading:false,
      country:'',
      city:'',
      countryId:'',
      flag:'',
      selectCountries:true,
      cityData:[],
      subcategory:[],
      category:''

    
    }
  this.getCountries();
  console.log(Categories.length )
  }
 increment=()=>{
   this.setState({currentPosition:this.state.currentPosition+1})
 }
  getCountries(){
    this.setState({countriesLoading:true})
    fetch('http://cms.drafterx.com/public/api/v1/services/Common/get_countries') 
  .then((response) => response.json())
  .then((responseJson) => {
    var countries=[]
   
    if(responseJson.status==200)
    {
     countries=responseJson.categories;
      
    }
    else{
      
    }
   this.setState({countriesData:countries,countriesLoading:false});
  })
  .catch((error) => {
    console.error(error);
    this.setState({countriesLoading:false})
  });
  }
  getCity(id){
    this.setState({cityLoading:true})
    fetch('http://cms.drafterx.com/public/api/v1/services/Common/get_cities?country_id='+id) 
  .then((response) => response.json())
  .then((responseJson) => {
    var city=[]
   
    if(responseJson.status==200)
    {
     city=responseJson.cities;
      
    }
    else{
      
    }
   this.setState({cityData:city,cityLoading:false});
  })
  .catch((error) => {
    console.error(error);
    this.setState({cityLoading:false})
  });
  }
navToCity(id,country,flag){
  this.setState({selectCountries:false,country:country,flag:flag});
  this.getCity(id);
}
  selectCountries() {
   
    return (
      this.state.selectCountries?
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Select Country</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>Where you want to show your ad</Text>
       
        <View style={{ width: '100%',marginTop:15 }}>
        {this.state.countriesLoading?
        <Text>Loading</Text>
        :<FlatList
        contentContainerStyle={{ marginBottom: 120 }}
        data={this.state.countriesData}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={()=>this.navToCity(item.id,item.en_name,item.iso2)} style={{ marginTop: 15, height:45,borderBottomColor: '#cdcdcd', borderBottomWidth: 1, width: '90%', marginLeft: '5%', marginRight: '5%' }}>
            <Text style={{ fontSize: 16, color: 'grey',marginBottom:10 ,marginLeft:15,marginTop:5}}>{item.en_name} </Text>
          </TouchableOpacity>
        }
      />
        }
        </View>

      </View>:
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Select City</Text>
      <Text style={{ fontSize: 13, color: 'grey' }}>Where you want to show your ad</Text>
      <Image source={{uri:'https://www.countryflags.io/'+this.state.flag+'/flat/64.png'}} style={{ width: 50, height: 50, marginTop: 10 }} />
        <Text style={{ fontSize: 15, color: 'grey' }}>{this.state.country}</Text>
      <View style={{ width: '100%',marginTop:15 }}>
      {this.state.countriesLoading?
      <Text>Loading</Text>
      :<FlatList
      contentContainerStyle={{ marginBottom: 120 }}
      data={this.state.cityData}
      renderItem={({ item }) =>
        <TouchableOpacity onPress={()=>this.setState({currentPosition:1,city:item.en_name})} style={{ marginTop: 15, height:45,borderBottomColor: '#cdcdcd', borderBottomWidth: 1, width: '90%', marginLeft: '5%', marginRight: '5%' }}>
          <Text style={{ fontSize: 16, color: 'grey',marginBottom:10 ,marginLeft:15,marginTop:5}}>{item.en_name} </Text>
        </TouchableOpacity>
      }
    />
      }
        
      </View>

    </View>
    )
  }
 
  goliveRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Finished</Text>
        <Text style={{ fontSize: 13, color: 'grey', alignItems: 'center', width: '80%', marginTop: 15 }}>Your ad is now live and being heard by minnion of People</Text>
        <TouchableOpacity onPress={() => Actions.push('Tabs')}  style={{ width: '50%', marginTop: 20, height: 45, backgroundColor: '#c0c0c0', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
          <Text>Check your live ad </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 13, color: 'grey', alignItems: 'center', marginTop: 20 }}>Congrats you earned 50 points</Text>

        <View style={{ marginBottom: 20, marginTop: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity  style={{ width: '35%', height: 40, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
            <Text>Promote your Ad </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>this.setState({currentPosition:0})} style={{ width: '35%', marginLeft: 10, height: 40, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
            <Text>Post another Ad </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
  PostadRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>You are almost Done!</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>People are searching for you item post now!</Text>

        <FlatList
          data={[{ key: 'a', title: 'Free', img: Free }, { key: 'b', title: 'Featured', img: Feature }, { key: 'c', title: 'Promoted', img: prop }]}
          horizontal

          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={{ width: 80, height: 120, marginLeft: 10, marginTop: 10 }}>
              <View style={{ width: 80, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 40, justifyContent: 'center', alignItems: 'center', height: 80 }}>

                <Image source={item.img} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
              </View>


              <Text style={{ marginTop: 10, fontSize: 14, color: 'grey', textAlign: 'center' }}>{item.title}</Text>

            </View>
          }
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey', marginTop: 30 }}>Order Summary</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
          <CheckBox style={{ color: 'grey' }} />
          <Text style={{ fontSize: 12, marginLeft: 15, color: 'grey' }}>I acknowledge and accept the term and conditions</Text>
        </View>
        <TouchableOpacity onPress={()=>this.post()} style={{ width: '80%', height: 45, backgroundColor: '#c0c0c0', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 30 }} >
          <Text>Live Your ad Now </Text>
        </TouchableOpacity>

      </View>
    )
  }
  post(){
    this.setState({currentPosition:4});
    Toast.show({
      text: 'Ad Posted Successfully',
      type:'success'
    });

  }
  detailRender() {
    return (
  
      <View style={{ width: '100%',height:'100%', justifyContent: 'center', alignItems: 'center', marginTop: 25,backgroundColor:'lightgrey' }}>
      <KeyboardAvoidingView>
            <View style={{width:width,height:'100%'}}>
            <Forms nav={this.increment} flag={this.state.flag} country={this.state.country}
             category={this.state.category} subcategory={this.state.subcategory} 
             selectTab={this.state.selectTab}
            />  
            </View>   
            </KeyboardAvoidingView>    
            
      </View>
    
    )
  }
  categoryRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Select Category</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>Which category suites best to your promote your ad</Text>
        <FlatList
          data={[{ key: 'CLASSIFIED' }, { key: 'AUCTION' }, { key: 'COMMUNITY' }, { key: 'ASK FOR' }]}
          horizontal

          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.setState({ selectTab: item.key })} style={{ height: 40, justifyContent: 'center', alignItems: 'center', width: width / 3, marginTop: 20, borderRadius: 5,marginLeft:10,borderWidth: 1, borderColor: 'grey', backgroundColor: this.state.selectTab == item.key ? "lightgrey" : null }}>
              <Text style={{ fontSize: 16 }}>{item.key}</Text>
            </TouchableOpacity>
          }
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey', marginTop: 50 }}>{this.state.selectTab}</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>Which category suites best to your promote your ad</Text>
        <View style={{ width: width, height: 150, flexDirection: 'row', marginTop: 20 }}>
          <FlatList
            data={Categories}
            horizontal

            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={()=>this.setState({currentPosition:2,category:item.value,subcategory:item.child})} style={{ width: 80, height: 80, marginLeft: 10 }}>
                <View style={{ width: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: '#cdcdcd', borderRadius: 35, justifyContent: 'center', alignItems: 'center', height: 70 }}>

                  <Image source={property} style={{ width: '70%', height: '70%', resizeMode: 'contain' }} />
                </View>


                <Text style={{ marginTop: 10, fontSize: 16, color: 'grey', textAlign: 'center' }}>{item.value}</Text>

              </TouchableOpacity>
            }
          />
        </View>


      </View>
    )
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  render() {
    return (
      <View style={styles.container}>
      
          <View style={{ flex: 0.8 }}>
            <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
              <TouchableOpacity onPress={()=>this.setState({currentPosition:this.state.currentPosition-1})} style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
               {this.state.currentPosition==0?null:
              <Image source={back} style={{ width: 30, height: 30 }} />
              } 
              </TouchableOpacity>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'grey' }}>Post Your Ad</Text>
              </View>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={close} style={{ width: 30, height: 30 }} />
              </View>
            </View>


            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              labels={labels}
            />
          {this.state.currentPosition==0?this.selectCountries():null}
          {this.state.currentPosition==1?this.categoryRender():null}
          {this.state.currentPosition==2?this.detailRender():null}
          {this.state.currentPosition==3?this.PostadRender():null}
          {this.state.currentPosition==4?this.goliveRender():null}
          
        

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