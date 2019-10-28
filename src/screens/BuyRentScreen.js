import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio,
    Text, TouchableOpacity, ActivityIndicator,TextInput,AsyncStorage,
    View,Dimensions,FlatList,ScrollView,
    Image
} from 'react-native';
import Menubar from '../assets/Menubar.png';
import Contact from '../assets/Contact.png';
import Usericon from '../assets/Usericon.png';
import search from '../assets/search.png';
import dropdown from '../assets/dropdown.png';
import noimage from '../assets/noimage.png';

import Faq from '../assets/Faq.png';
import T_c from '../assets/T_C.png';
import Timer from '../assets/Timer.png';

import About from '../assets/About.png';
import Menu from './Menu';
import SideMenu from 'react-native-side-menu';
var navBar=Platform.OS=="ios"?20:0;
// import strings from '../constant/strings';
import car from '../assets/car.png';
import { FlatGrid } from 'react-native-super-grid';

import { Router, Stack, Actions } from 'react-native-router-flux';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class BuyRentScreen extends PureComponent {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            randomPost:[],
            randomList:[],
            interstedList:[]
        };
        AsyncStorage.clear();
        AsyncStorage.getItem("token").then((value) => {
            this.setState({token:value});
            if(value!=null)
            {
                this.UserPostByLastSearch();
                console.warn("not guest ")


            }
            else
            {
                this.randomPostGuest();
                this.randomListGuest();
             console.warn("guest ")
            }
          })

        this.getRandomPost();
    }
    UserPostByLastSearch(token)
    {
        fetch('http://drafterx.com/classifiedmarkazapp/public/api/v1/random',{    
                method: 'GET',
                headers: {
                Authorization:token,
                  'Content-Type': 'application/json',
                },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          //this.setState({randomPost:responseJson.success.data.data})
        })
        .catch((error) => {
          console.error(error);
        });  
    }
    randomPostGuest()
    {
        fetch('http://www.mocky.io/v2/5d9fe87c300000c96b524a2d',{    
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          //this.setState({randomPost:responseJson.success.data.data})
        })
        .catch((error) => {
          console.error(error);
        });  
    }
    randomListGuest()
    {
        fetch('http://www.mocky.io/v2/5d9fe87c300000c96b524a2d',{    
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.status=true)
            {
                this.setState({randomList:responseJson.RentBuyListView})
            }
        })
        .catch((error) => {
          console.error(error);
        });  
    }
    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }
    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };
    getRandomPost=()=>{
        fetch('http://www.mocky.io/v2/5da3f2a52f000059008a087e')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      if(responseJson.status=true)
      {
          this.setState({randomPost:responseJson.featuredListView,interstedList:responseJson.interestListView})
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
          <ScrollView style={{flex:1,backgroundColor:'white'}}>
            <View style={styles.container}>
               

                    <View style={{ width: width, height: 50 ,flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>this.setState({isOpen:!this.state.isOpen})} style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                         <Image source={Menubar} style={{width:28,height:28}}/>
                        </TouchableOpacity  >
                        <View style={{width:'25%',height:'100%'}}>

                        </View>
                        <TouchableOpacity style={{width:'45%',height:'100%',justifyContent:"center",alignItems:'center'}}>
                            <Text style={{fontSize:15,color:'grey'}}>LOGIN NOW | SIGN UP</Text>
                            
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
                    <View style={{width:width,height:150,flexDirection:'row'}}>
                         <View style={{justifyContent:'center',alignItems:'center',width:'30%',height:'100%'}}>
                             <Image source={car}  style={{width:'80%',height:'80%'}}/>
                         </View>
                         <View style={{justifyContent:'center',width:'70%',height:'100%'}}>
                         <Text style={{fontSize:20,color:'grey',fontWeight:'bold'}}>105+</Text>
                         <Text style={{fontSize:18,color:'grey',fontWeight:'bold',marginTop:5}}>New Cars Added in Altima</Text>
                         <Text style={{fontSize:15,color:'grey',marginTop:5}}>Since your Last Search > Show more</Text>
                         </View>

                    </View>
                    <View style={{width:width,height:200,flexDirection:'row',marginBottom:20}}>
                    <FlatList
                        data={this.state.randomPost}
                        horizontal
                        renderItem={({item}) =>
                         
                         <TouchableOpacity onPress={()=>Actions.push('DetailScreen')} style={{width:width/3,height:'100%',marginLeft:10}}>
                             <View style={{width:'90%',backgroundColor:'#89898989',borderRadius:8,justifyContent:'center',alignItems:'center',height:'55%'}}>

                             <Image source={{uri:'https://i.imgur.com/LhFhBio.jpg'}} style={{width:'100%',height:'100%'}}/>
                             </View>
                             <View style={{width:'90%',borderRadius:8,justifyContent:'center',height:'45%'}}>
                             <Text style={{fontSize:18,color:'grey',fontWeight:'bold'}}>{item.price}</Text>
                             <Text style={{fontSize:12,color:'grey'}}>{item.productName}</Text>
                             <Text style={{fontSize:12,color:'grey'}}>2016-45000 KM</Text>
                                </View>
                         </TouchableOpacity>
                    }
                        />
                        </View>
                     
                    <FlatList
                        data={this.state.randomList.slice(0,1)}
                        maxToRenderPerBatch={1}
                       
                        renderItem={({item}) =>
                         <TouchableOpacity onPress={()=>Actions.push('DetailScreen')} style={{width:width,height:200,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:'95%',backgroundColor:'#F5f5f5',borderRadius:8,height:'95%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                                <Image source={{uri:'https://i.imgur.com/LhFhBio.jpg'}} style={{width:'80%',height:'80%',resizeMode:'contain'}}/>
                            </View>
                            <View style={{width:'60%',height:'100%',alignItems:'center'}}>
                               <Text style={{fontSize:16,color:'grey',fontWeight:'bold',marginTop:10}}>{item.productName}</Text>
                               <View style={{width:'100%',height:'80%',flexDirection:'row'}}>
                                   <View style={{width:'50%',height:"100%"}}>
                                   <Text style={{fontSize:14,color:'grey',marginTop:10}}>AED</Text>
                                   <Text style={{fontSize:16,color:'grey',fontWeight:'bold',marginTop:10}}>120,000</Text>
                                   <Text style={{fontSize:14,color:'grey',marginTop:1}}>Current price</Text>
                                   <Text style={{fontSize:15,color:'grey',fontWeight:'bold',marginTop:10}}>203</Text>
                                   <Text style={{fontSize:14,color:'grey',marginTop:1}}>Bid Price</Text>
                        
                                   </View>
                                   <View style={{width:'50%',height:"100%"}}>
                                   <Image source={Timer} style={{width:'80%',height:'80%',resizeMode:'contain'}}/>
                                   <Text style={{fontSize:15,color:'grey',fontWeight:'bold',marginTop:0}}>4 hrs  33m 12s</Text>
                                   
                                       
                                       </View>
                               </View>
                        
                            </View>
                        
                            </View>
                        </TouchableOpacity>
                     
                    }
                        />
                        <View style={{width:width,justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:16,fontWeight:'300'}}>View all</Text>
                        </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:18,fontWeight:'500',marginTop:20,textAlign:'center'}}>YOU MAY BE INTERESTED</Text>
                      
                        <View style={{width:width,justifyContent:'center',alignItems:'center'}}>

                        </View>
                        <FlatGrid
                            itemDimension={130}
                            items={this.state.interstedList}
                            style={styles.gridView}
                            contentContainerStyle={{marginBottom:40}}
                            // staticDimension={300}
                            // fixed
                            // spacing={20}
                            renderItem={({ item, index }) => (
                             <TouchableOpacity onPress={()=>Actions.push('DetailScreen')} style={styles.itemContainer}>
                                  <View style={{width:'100%',backgroundColor:'#89898989',borderRadius:8,justifyContent:'center',alignItems:'center',height:'55%'}}>

                                        <Image source={{uri:'https://i.imgur.com/LhFhBio.jpg'}} style={{width:'100%',height:'100%'}}/>
                                        </View>
                                        <View style={{width:'100%',borderRadius:8,justifyContent:'center',height:'45%'}}>
                                        <Text style={{fontSize:18,color:'grey',fontWeight:'bold'}}>{item.price}</Text>
                                        <Text style={{fontSize:12,color:'grey'}}>{item.productName}</Text>
                                        <Text style={{fontSize:12,color:'grey'}}>2016-45000 KM</Text>
                                        </View>
                                </TouchableOpacity>
                            )}
                        />
                                    
        
            </View>
            </ScrollView>
            </SideMenu>
         
        );
    }

}
{/* <View style={{width:width,height:'25%',justifyContent:'center',alignItems:'center'}}>
<View style={{width:'95%',backgroundColor:'#c0c0c0',borderRadius:8,height:'95%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <Image source={noimage} style={{width:'80%',height:'80%',resizeMode:'contain'}}/>
    </View>
    <View style={{width:'60%',height:'100%',alignItems:'center'}}>
       <Text style={{fontSize:16,color:'grey',fontWeight:'bold',marginTop:10}}>Nissan Petrol 2005</Text>
       <View style={{width:'100%',height:'80%',flexDirection:'row'}}>
           <View style={{width:'50%',height:"100%"}}>
           <Text style={{fontSize:14,color:'grey',marginTop:10}}>AED</Text>
           <Text style={{fontSize:16,color:'grey',fontWeight:'bold',marginTop:10}}>120,000</Text>
           <Text style={{fontSize:14,color:'grey',marginTop:1}}>Current price</Text>
           <Text style={{fontSize:15,color:'grey',fontWeight:'bold',marginTop:10}}>203</Text>
           <Text style={{fontSize:14,color:'grey',marginTop:1}}>Bid Price</Text>

           </View>
           <View style={{width:'50%',height:"100%"}}>
           <Image source={Timer} style={{width:'80%',height:'80%',resizeMode:'contain'}}/>
           <Text style={{fontSize:15,color:'grey',fontWeight:'bold',marginTop:0}}>4 hrs  33m 12s</Text>
           
               
               </View>
       </View>

    </View>

    </View>
</View> */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
marginTop:navBar,
        backgroundColor: '#fff',
    },
    animatedBox: {
       height:height-80,
       width:'80    %',
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
    gridView: {
        marginTop: 20,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 200,
        backgroundColor:'#f5f5f5'
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
});