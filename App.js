import React, {Component} from 'react';
import {Image} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import HomeScreen from './src/components/HomeScreen';
import ContactsScreen from './src/components/ContactsScreen';
import CalendarScreen from './src/components/CalendarScreen';
import InboxScreen from './src/components/InboxScreen';
import ProfileScreen from './src/components/ProfileScreen';

export default TabNavigator({
  HJEM: {screen: HomeScreen},
  BORGERE: {screen: ContactsScreen},
  KALENDAR: {screen: CalendarScreen},
  INDBAKKE: {screen: InboxScreen},
  PROFIL: {screen: ProfileScreen}
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      
      // TODO: this code must be refactored, but 'require' function behaves pretty weird... a ternary operator couldn't be used in it's param  
      if (routeName === 'HJEM') {
        return (focused) ? <Image source={require(`./src/img/home-focused.png`)}/>: <Image source={require(`./src/img/home.png`)}/>;
      } else if (routeName === 'BORGERE') {
        return (focused) ? <Image source={require(`./src/img/contacts-focused.png`)}/>: <Image source={require(`./src/img/contacts.png`)}/>;
      } else if (routeName === 'KALENDAR') {
        return (focused) ? <Image source={require(`./src/img/calendar-focused.png`)}/>: <Image source={require(`./src/img/calendar.png`)}/>;
      } else if (routeName === 'INDBAKKE') {
        return (focused) ? <Image source={require(`./src/img/chat-focused.png`)}/>: <Image source={require(`./src/img/chat.png`)}/>;
      } else if (routeName === 'PROFIL') {
        return (focused) ? <Image source={require(`./src/img/profile-focused.png`)}/>: <Image source={require(`./src/img/profile.png`)}/>;
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: '#8AC44C',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  // animationEnabled: false,
  swipeEnabled: false,
  initialRouteName: 'KALENDAR'
});