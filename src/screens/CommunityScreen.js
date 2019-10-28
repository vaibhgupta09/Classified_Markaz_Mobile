import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio,
    Text, TouchableOpacity, ActivityIndicator,TextInput,
    View,Dimensions,FlatList,ScrollView,
    Image
} from 'react-native';
import Menubar from '../assets/Menubar.png';
import Contact from '../assets/Contact.png';
import Usericon from '../assets/Usericon.png';
import search from '../assets/search.png';
import dropdown from '../assets/dropdown.png';
import noimage from '../assets/noimage.png';
import property from '../assets/Job.png';
import Motor from '../assets/Jobwan.png';
import Mobile from '../assets/Act.png';
import Electronic from '../assets/Art.png';
import Sofa from '../assets/Carlift.png';
import Ref from '../assets/Childcare.png';
import Com from '../assets/Class.png';
import Sqaures from '../assets/squares.png';
import Sort from '../assets/Sort.png';
import Near from '../assets/Near.png';
import Capture from '../assets/Dil.png';


import Faq from '../assets/Faq.png';
import T_c from '../assets/T_C.png';
import Timer from '../assets/Timer.png';

import About from '../assets/About.png';
import Menu from './Menu';
import SideMenu from 'react-native-side-menu';
var navBar=Platform.OS=="ios"?20:0;
// import strings from '../constant/strings';
import car from '../assets/car.png';

import { Router, Stack, Actions } from 'react-native-router-flux';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class CommunityScreen extends PureComponent {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            communityList:[]
        };
        this.getRandomPost();
    }
    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }
    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };
    getRandomPost=()=>{
        fetch('http://www.mocky.io/v2/5d9fe7853000001269524a28')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      if(responseJson.status=true)
      {
          this.setState({communityList:responseJson.AskForListView})
      }
     // this.setState({randomPost:responseJson.success.data.data})
    })
    .catch((error) => {
      console.error(error);
    });
    }
    drawerContent = () => {
        return (
            <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
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

           
              
            </TouchableOpacity>
        );
    };
    onMenuItemSelected = item =>
    this.setState({
        isOpen: false,
        selectedItem: item,
    });
    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        return (
            <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            openMenuOffset={width/3}
            onChange={isOpen => this.updateMenuState(isOpen)}
        >
            <ScrollView>
            <View style={styles.container}>
               

                    <View style={{ width: width, height: 50 ,flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>this.setState({isOpen:!this.state.isOpen})} style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                         <Image source={Menubar} style={{width:28,height:28}}/>
                        </TouchableOpacity  >
                        <View style={{width:'25%',height:'100%'}}>

                        </View>
                        <TouchableOpacity style={{width:'45%',height:'100%',justifyContent:"center",alignItems:'center'}}>
                            {/* <Text style={{fontSize:15,color:'grey'}}>LOGIN NOW | SIGN UP</Text> */}
                            
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'15%',height:'100%',justifyContent:"center",alignItems:'center'}}>
                                <Image source={Usericon} style={{width:'50%',width:'50%'}}/>
                            
                            </TouchableOpacity>

                    </View>
                    <View style={{width:width,height:60,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:'95%',height:55,borderRadius:8,borderWidth:1,borderColor:'grey',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                          <Image source={search} style={{width:'10%',height:30,resizeMode:'contain'}}/>
                          <TextInput
                            style={{height: 50, width:'70%',fontSize:15,color:'grey'}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder='What are you looking for ? Find now'
                        />
                        <TouchableOpacity style={{width:'20%',flexDirection:'row'}}>
                        <Text style={{fontSize:20,color:'grey'}}>SHR</Text>
                        <Image source={dropdown} style={{width:22,height:22,resizeMode:'contain'}}/>  
                        </TouchableOpacity>   
                        </View>
                    </View>
                  
                    <View style={{width:width,height:150,flexDirection:'row',marginTop:20}}>
                    <FlatList
                        data={[{key: 'a',title:'Jobs',img:property}, {key: 'b',title:'Job Wanted',img:Motor},{key: 'c',title:'Activites',img:Mobile}, {key: 'd',title:'Artist',img:Electronic},{key: 'e',title:'Car Lift',img:Sofa},{key: 'f',title:'Child Care',img:Ref},{key: 'g',title:'Classes',img:Com}]}
                        horizontal
                       
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => 
                         <TouchableOpacity style={{width:100,height:100,marginLeft:10}}>
                             <View style={{width:100,backgroundColor:'#fff',borderWidth:1,borderColor:'grey',borderRadius:50,justifyContent:'center',alignItems:'center',height:100}}>
                              
                             <Image source={item.img} style={{width:'50%',height:'50%',resizeMode:'contain'}}/>
                             </View>
                             

                             <Text style={{marginTop:10,fontSize:16,color:'grey',textAlign:'center'}}>{item.title}</Text>
                           
                         </TouchableOpacity>
                    }
                        />
                        </View>
                       
                        <View style={{width:width,height:'13%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:23,color:'grey',fontWeight:'bold',textAlign:'center'}}>MOST RECENT ARRIVALS</Text>
                          <Text style={{fontSize:22,marginTop:5,color:'grey',textAlign:'center'}}>185,000</Text>
                          <View style={{flexDirection:'row',marginTop:10,width:'100%',height:'30%',justifyContent:"center",alignItems:'center'}}>
                            <View style={{width:'25%',height:'100%',backgroundColor:'lightgrey',flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'grey'}}>VIEW</Text>
                            <Image source={Sqaures} style={{width:20,height:20,marginLeft:10}}/>
                            </View>
                            <View style={{width:'25%',marginLeft:'3%',height:'100%',backgroundColor:'lightgrey',flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'grey'}}>SORT BY</Text>
                            <Image source={Sort} style={{width:20,height:20,marginLeft:10}}/>
                            </View>
                            <View style={{width:'25%',marginLeft:'3%',height:'100%',backgroundColor:'lightgrey',flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'grey'}}>NEAR BY</Text>
                            <Image source={Near} style={{width:20,height:20,marginLeft:10}}/>
                            </View>
                        
                         </View>
                          </View>
                          
                          <FlatList
                          scrollEnabled={false}
                        
                        contentContainerStyle={{marginBottom:120}}
                                data={this.state.communityList}
                                renderItem={({item}) => 
                                <TouchableOpacity onPress={()=>Actions.push('CommunityDetail')} style={{width:width,height:height/3.4,justifyContent:'center',alignItems:'center',marginTop:15}}>
                                <View style={{width:'95%',backgroundColor:'#f5f5f5',borderRadius:8,height:'90%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <View style={{width:'100%',height:'15%'}}>
                                <Text style={{fontSize:20,color:'grey',fontWeight:'bold',marginTop:5,marginLeft:10}}>{item.productName}</Text>
                                </View>
                                <View style={{width:'100%',height:'85%',flexDirection:"row"}}>
                                <View style={{width:'35%',backgroundColor:'#89898989',borderRadius:8,justifyContent:'center',alignItems:'center',height:'95%',marginTop:'2%'}}>
      
                                  <Image source={noimage} style={{width:'50%',height:'50%',resizeMode:'contain'}}/>
                                  </View>
                                  <View style={{width:'40%',height:"100%"}}>
                                                   <Text style={{fontSize:14,color:'grey',marginTop:10,marginLeft:10}}>{item.description}</Text>
                                                
      
                                                   </View>
      
                                         <View style={{width:'25%',height:"100%",justifyContent:"flex-end",alignItems:'flex-end'}}>
                                                   <Image source={Capture} style={{width:'30%',height:'30%',resizeMode:'contain'}}/>     
                                                       </View>
      
                               
                                  </View>
      
                                    </View>
                                    </TouchableOpacity>}
                                />
                              
                         


                             
                       
                       
                  
        
            </View>
            </ScrollView>
            </SideMenu>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
marginTop:navBar,
        backgroundColor: '#fff',
    },
    animatedBox: {
       height:height-80,
       width:'80%',
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