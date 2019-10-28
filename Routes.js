/*
    All the routes come here. Add any route and link it here to access it.
    Use Actions.routename() to access any route.
*/

/* Do not remove the below line. */
import {AsyncStorage} from 'react-native';
import {Router,Stack,Scene} from 'react-native-router-flux';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import IntroScreen from './src/screens/IntroScreen';
import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import Tabs from './src/screens/Tabs';
import DetailScreen from './src/screens/DetailScreen';
import AuctionDetail from './src/screens/AuctionDetail';
import CommunityDetail from './src/screens/CommunityDetail';
import AskForDetail from './src/screens/AskForDetail';
const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="SplashScreen" component={SplashScreen} hideNavBar    />
      <Scene key="IntroScreen" component={IntroScreen} hideNavBar  />
      <Scene key="LoginScreen" component={LoginScreen} hideNavBar initial  />
      <Scene key="OTPScreen" component={OTPScreen} hideNavBar  />
      <Scene key="Tabs" component={Tabs} hideNavBar    />
      <Scene key="DetailScreen" component={DetailScreen} hideNavBar    />
      <Scene key="AuctionDetail" component={AuctionDetail} hideNavBar     />
      <Scene key="CommunityDetail" component={CommunityDetail} hideNavBar     />
      <Scene key="AskForDetail" component={AskForDetail} hideNavBar      />
    </Stack>
  </Router>
);  
        
export default Routes;