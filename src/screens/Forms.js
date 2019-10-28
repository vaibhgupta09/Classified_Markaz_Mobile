import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,PixelRatio,ScrollView,KeyboardAvoidingView,
  Text,TouchableOpacity,ActivityIndicator,FlatList,
  View,TextInput,Dimensions,
  Image
} from 'react-native';
import applogo from '../assets/logo.png';
import girl from '../assets/girl.png';
import {Router,Stack,Actions} from 'react-native-router-flux';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Rent from '../assets/Rent.png';
import property from '../assets/Property.png';
import { Dropdown } from 'react-native-material-dropdown';
import Imageadd from '../assets/Imageadd.png';
import ImagePicker from 'react-native-image-crop-picker';
import {Toast} from 'native-base';
export default class Forms extends PureComponent {

  constructor() {
    super();
    this.state = {  
        Title:'',
        accept:false,
        Category:'',
        Sub_Category:'',
        Photos:'',
        Price:'',
        Description:'',
        Size:'',
        Price:'',
        Location:'',
        Bedroom:'',
        Bathroom:'',
        Developer_Name:'',
        Buy_From:'',
        Commission:'',
        Commission_Amount:'',
        Ready_By:'',
        Installment_Plan:'',
        Monthly_Installment:'',
        Installment_Period:'',
        Property_Reference:'',
        Building_Name:'',
        Balcony:'',
        Built_in_Kitchen_Appliances:'',
        Built_in_Wardrobes:'',
        Concierge_Service:'',
        Central_AC__Heating:'',
        Covered_Parking:'',
        Maids_Room:'',
        Pets_Allowed:'',
        Private_Garden:'',
        Private_Gym:'',
        Private_Pool:'',
        Private_Jacuzzi:'',
        Security:'',
        Shared_Gym:'',
        Shared_Pool:'',
        Study:'',
        Shared_Spa:'',
        View_of_Landmark:'',
        View_of_Water:'',
        Walk_in_loset:'',
        Images:[]
    
    };
 
  }
  componentDidMount () {
  
  }
  addImages(){
    ImagePicker.openPicker({
        multiple: true
      }).then(images => {
        console.log(images);
        this.setState({Images:images})
      })
  }
  checkAccept(){
      if(this.state.accept==false){
        Toast.show({
            text: 'Accept terms and condition',
            type:'danger'
          }); 
      }
      else{
          this.validate();
      }
  }
validate(){
    if(this.state.Title==''){
        Toast.show({
            text: 'Please fill mandatory fields.',
            type:'danger'
          });
    }
    else if(this.state.Sub_Category==''){
        Toast.show({
            text: 'Please fill mandatory fields.',
            type:'danger'
          });
    }
    else if(this.state.Price==''){
        Toast.show({
            text: 'Please fill mandatory fields.',
            type:'danger'
          });
    }
    else if(this.state.Bedroom==''){
        Toast.show({
            text: 'Please fill mandatory fields.',
            type:'danger'
          });
    }
    else if(this.state.Bathroom==''){
        Toast.show({
            text: 'Please fill mandatory fields.',
            type:'danger'
          });
    
    }
    else{
        this.props.nav();
    }
}
form1(){
    
      let YESNO = [{
        value: 'YES',
      }, {
        value: 'NO',
      }];
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <KeyboardAwareScrollView>
            <View style={{width:width-40}}>
            <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                placeholder={'Ad Title *'}
                onChangeText={(title) => this.setState({Title:title})}
                value={this.state.Title}
                
                
                /> 
                  <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                onChangeText={(title) => this.setState({Category:title})}
                value={this.props.category}
                editable={false}
                placeholder={'Category*'}
                
                />
              <Dropdown
                    label='Select Subcategory*'
                    data={this.props.subcategory}
                    value={this.state.Sub_Category}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Sub_Category:value})}
                />
                <TouchableOpacity onPress={()=>this.addImages()} style={{alignItems:'center',height:60,borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,width:'100%',flexDirection:'row'}}>
                <Text style={{fontSize:16,width:'90%',color:'grey'}}>Select Photos*</Text>
                <Image source={Imageadd} style={{height:30,width:30}}/>
                </TouchableOpacity>
                {this.state.Images.length>0?
                <FlatList
                data={this.state.Images}
                horizontal
                renderItem={({ item }) => (
                   <Image
                   source={{uri:item.path}}
                   style={{marginLeft:10,width:90,height:100,marginTop:10}}
                   />

                  
                )}
                keyExtractor={item => item.path}
              />
             :null    
            }
            
             <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                onChangeText={(title) => this.setState({Price:title})}
                value={this.state.Price}
                placeholder={'Price with currency*'}
                
                />
              {/* <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Location}
                onChangeText={(title) => this.setState({Location:title})}
                placeholder={'Location'}
                
                /> */}
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Bedroom}
                placeholder={'No. of Bedroom*'}
                onChangeText={(title) => this.setState({Bedroom:title})}
                keyboardType={'numeric'}
                />   
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Bathroom}
                onChangeText={(title) => this.setState({Bathroom:title})}
                placeholder={'No. of Bathroom*'}
                keyboardType={'numeric'}
                />   
                 <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Developer_Name}
                placeholder={'Developer Name'}
                onChangeText={(title) => this.setState({Developer_Name:title})}
                />     
                <Dropdown
                    label='Buy From'
                    data={YESNO}
                    value={this.state.Buy_From}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Buy_From:value})}
                />
                <Dropdown
                    label='Commision'
                    data={YESNO}
                    value={this.state.Commission}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Commission:value})}
                />
                {this.state.Commission=="YES"?
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Commission_Amount}
                placeholder={'Commision Amount'}
                onChangeText={(title) => this.setState({Commission_Amount:title})}
                keyboardType={'numeric'}
                />   :null
               }
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Ready_By}
                placeholder={'Ready By'}
                onChangeText={(title) => this.setState({Ready_By:title})}
                /> 
                <Dropdown
                    label='Installment Plan'
                    data={YESNO}
                    value={this.state.Installment_Plan}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Installment_Plan:value})}
                />
                {this.state.Installment_Plan=="YES"?
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Monthly_Installment}
                placeholder={'Monthly Installment'}
                keyboardType={'numeric'}
                onChangeText={(title) => this.setState({Monthly_Installment:title})}
                /> :null
               } 
               <Dropdown
                    label='Installment Period'
                    data={YESNO}
                    value={this.state.Installment_Period}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Installment_Period:value})}
                />
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Property_Reference}
                placeholder={'Property Reference#'}
                onChangeText={(title) => this.setState({Property_Reference:title})}
                />
                <TextInput
                style={{ height: 60, borderBottomColor: 'rgba(0, 0, 0, .38)', borderBottomWidth: 1,fontSize:16 }}
                value={this.state.Building_Name}
                placeholder={'Building Name'}
                onChangeText={(title) => this.setState({Building_Name:title})}
                />
                <Dropdown
                    label='Balcony'
                    data={YESNO}
                    value={this.state.Balcony}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Balcony:value})}

                />
                <Dropdown
                    label='Built in Kitchen Appliances'
                    data={YESNO}
                    value={this.state.Built_in_Kitchen_Appliances}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Built_in_Kitchen_Appliances:value})}

                />
                <Dropdown
                    label='Built in Wardrobes'
                    data={YESNO}
                    value={this.state.Built_in_Wardrobes}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Built_in_Wardrobes:value})}

                />
                <Dropdown
                    label='Concierge Service'
                    data={YESNO}
                    value={this.state.Concierge_Service}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Concierge_Service:value})}

                />
                <Dropdown
                    label='Central A/C & Heating'
                    data={YESNO}
                    value={this.state.Central_AC__Heating}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Central_AC__Heating:value})}

                />
                <Dropdown
                    label='Covered Parking'
                    data={YESNO}
                    value={this.state.Covered_Parking}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Covered_Parking:value})}

                />
                <Dropdown
                    label='Maids Room'
                    data={YESNO}
                    value={this.state.Maids_Room}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Maids_Room:value})}

                />
                <Dropdown
                    label='Private Garden'
                    data={YESNO}
                    value={this.state.Private_Garden}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Private_Garden:value})}

                />
                <Dropdown
                    label='Private Gym'
                    data={YESNO}
                    value={this.state.Private_Gym}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Private_Gym:value})}

                />
                <Dropdown
                    label='Private Pool'
                    data={YESNO}
                    value={this.state.Private_Pool}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Installment_Period:value})}

                />
                <Dropdown
                    label='Private Jacuzzi'
                    data={YESNO}
                    value={this.state.Private_Jacuzzi}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Private_Jacuzzi:value})}

                />

                <Dropdown
                    label='Security'
                    data={YESNO}
                    value={this.state.Security}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Security:value})}

                />
                <Dropdown
                    label='Shared Gym'
                    data={YESNO}
                    value={this.state.Shared_Gym}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Shared_Gym:value})}

                />
                <Dropdown
                    label='Shared Pool'
                    data={YESNO}
                    value={this.state.Shared_Pool}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Shared_Pool:value})}

                />
                <Dropdown
                    label='Study'
                    data={YESNO}
                    value={this.state.Study}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Study:value})}

                />
                <Dropdown
                    label='Shared Spa'
                    data={YESNO}
                    value={this.state.Shared_Spa}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({Shared_Spa:value})}

                />
                <Dropdown
                    label='View of Landmark'
                    data={YESNO}
                    value={this.state.View_of_Landmark}
                    labelFontSize={16}
                    onChangeText={(value)=>this.setState({View_of_Landmark:value})}

                />
                 <Dropdown
                    label='Walk-in Closet'
                    data={YESNO}
                    value={this.state.Walk_in_loset}
                    onChangeText={(value)=>this.setState({Walk_in_loset:value})}

                    labelFontSize={16}
                />
           

            </View>
            </KeyboardAwareScrollView>
        </View>
        
    )
}
  render() {

    return (
       
        <KeyboardAwareScrollView style={styles.container}>  
       <View>
       <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey',textAlign:'center' }}>Add Your Ad Detail</Text>

       
           <View style={{flexDirection:'row',width:width,justifyContent:'center',marginTop:5}}>
            <View style={{ width: 80, height: 120, marginLeft: 10, marginTop: 10 }}>
              <View style={{ width: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 40, justifyContent: 'center', alignItems: 'center', height: 70 }}>

                <Image source={{uri:'https://www.countryflags.io/'+this.props.flag+'/flat/64.png'}} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
              </View>


              <Text style={{ marginTop: 10, fontSize: 14, color: 'grey', textAlign: 'center' }}>{this.props.country}</Text>

            </View>
            <View style={{ width: 80, height: 120, marginLeft: 10, marginTop: 10 }}>
              <View style={{ width: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 35, justifyContent: 'center', alignItems: 'center', height: 70 }}>

                <Image source={Rent} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
              </View>


              <Text style={{ marginTop: 10, fontSize: 14, color: 'grey', textAlign: 'center' }}>{this.props.selectTab}</Text>

            </View>
            <View style={{ width: 80, height: 120, marginLeft: 10, marginTop: 10 }}>
              <View style={{ width: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 35, justifyContent: 'center', alignItems: 'center', height: 70 }}>

                <Image source={property} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
              </View>


              <Text style={{ marginTop: 10, fontSize: 14, color: 'grey', textAlign: 'center' }}>{this.props.category}</Text>

            </View>
            </View> 
       {this.form1()}

        <View style={{width:width,flexDirection:'row',marginTop:25}}>
        <TouchableOpacity onPress={()=>this.setState({accept:!this.state.accept})} style={{marginLeft:20,height:20,width:20,backgroundColor:this.state.accept?'grey':'white',borderColor:'grey',borderWidth:1}}>

        </TouchableOpacity>
        <Text style={{marginLeft:10,fontSize:12}}>I acknowledge and accept the Terms and Conditions</Text>
        </View>

        <View style={{width:width,marginTop:25,marginBottom:40,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this.checkAccept()} style={{width:'50%',height:40,justifyContent:'center',alignItems:'center',backgroundColor:"lightgrey"}}>
                <Text style={{fontSize:15,color:'black'}}>Confirm and Proceed</Text>
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