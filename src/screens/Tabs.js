import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio,
    Text, TouchableOpacity, ActivityIndicator,
    View,
    Image
} from 'react-native';
import Buyrent from '../assets/Buyrent.png';
import Auction from '../assets/Auction.png';
import PostAd from '../assets/PostAd.png';
import Community from '../assets/Community.png';
import AskFor from '../assets/AskFor.png';



import { Router, Stack, Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import BuyRentScreen from './BuyRentScreen';
import AuctionScreen from './AuctionScreen';
import PostAdScreen from './PostAdScreen';
import CommunityScreen from './CommunityScreen';
import AskForScreen from './AskForScreen';




export default class Tabs extends PureComponent {

    constructor() {
        super()
        this.state = {
            selectedTab:'Postad'

        };

    }


    render() {
        return (
            <View style={styles.container}>

                <TabNavigator tabBarStyle={{ height: 60, overflow: 'hidden' }}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Buyrent'}
                        title="BUY | RENT "
                        renderIcon={() => <Image source={Buyrent} style={{width:28,height:28}} />}
                        renderSelectedIcon={() => <Image source={Buyrent} style={{width:28,height:28}} />}
                      //  badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'Buyrent' })}>
                       <BuyRentScreen/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Auction'}
                        title="AUCTION"
                        renderIcon={() => <Image source={Auction} style={{width:28,height:28}} />}
                        renderSelectedIcon={() =><Image source={Auction} style={{width:28,height:28}} />}
                    //    renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'Auction' })}>
                      <AuctionScreen/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Postad'}
                        title="Post Your Ad"
                        renderIcon={() => <Image source={PostAd} style={{width:28,height:28}} />}
                        renderSelectedIcon={() => <Image source={PostAd} style={{width:28,height:28}} />}
                      //  renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'Postad' })}>
                       <PostAdScreen/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Community'}
                        title="COMMUNITY"
                        renderIcon={() => <Image source={Community} style={{width:28,height:28}} />}
                        renderSelectedIcon={() => <Image source={Community} style={{width:28,height:28}} />}
                      //  renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'Community' })}>
                       <CommunityScreen/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Askfor'}
                        title="ASK FOR"
                        renderIcon={() => <Image source={AskFor} style={{width:28,height:28}} />}
                        renderSelectedIcon={() => <Image source={AskFor} style={{width:28,height:28}} />}
                      //  renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'Askfor' })}>
                      <AskForScreen/>
                    </TabNavigator.Item>
                </TabNavigator>


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