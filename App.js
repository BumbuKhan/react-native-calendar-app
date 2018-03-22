import React, {Component} from 'react';
import {Image} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import HomeScreen from './src/components/HomeScreen';
import ContactsScreen from './src/components/ContactsScreen';
import CalendarScreen from './src/components/CalendarScreen';
import InboxScreen from './src/components/InboxScreen';
import ProfileScreen from './src/components/ProfileScreen';

export default TabNavigator({
  Home: {screen: HomeScreen},
  Contacts: {screen: ContactsScreen},
  Calendar: {screen: CalendarScreen},
  Inbox: {screen: InboxScreen},
  Profile: {screen: ProfileScreen}
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let img;
      
      if (routeName === 'Home') {
        return (focused) ? <Image source={require(`./src/img/home-focused.png`)}/>: <Image source={require(`./src/img/home.png`)}/>;
      } else if (routeName === 'Contacts') {
        return (focused) ? <Image source={require(`./src/img/contacts-focused.png`)}/>: <Image source={require(`./src/img/contacts.png`)}/>;
      } else if (routeName === 'Calendar') {
        return (focused) ? <Image source={require(`./src/img/calendar-focused.png`)}/>: <Image source={require(`./src/img/calendar.png`)}/>;
      } else if (routeName === 'Inbox') {
        return (focused) ? <Image source={require(`./src/img/chat-focused.png`)}/>: <Image source={require(`./src/img/chat.png`)}/>;
      } else if (routeName === 'Profile') {
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
  initialRouteName: 'Calendar'
});