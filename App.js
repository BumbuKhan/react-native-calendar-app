import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation'

class HomeScreen extends Component {
  render() {
    return (
      <View style={style.screen}>
        <Text>Home</Text>
      </View>
    );
  }
}

class ContactsScreen extends Component {
  render() {
    return (
      <View style={style.screen}>
        <Text>Contacts</Text>
      </View>
    );
  }
}

class CalendarScreen extends Component {
  render() {
    return (
      <View style={style.screen}>
        <Text>Calendar</Text>
      </View>
    );
  }
}

class InboxScreen extends Component {
  render() {
    return (
      <View style={style.screen}>
        <Text>Inbox</Text>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <View style={style.screen}>
        <Text>Profile</Text>
      </View>
    );
  }
}

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
        return (focused) ? <Image source={require(`./img/home-focused.png`)}/>: <Image source={require(`./img/home.png`)}/>;
      } else if (routeName === 'Contacts') {
        return (focused) ? <Image source={require(`./img/contacts-focused.png`)}/>: <Image source={require(`./img/contacts.png`)}/>;
      } else if (routeName === 'Calendar') {
        return (focused) ? <Image source={require(`./img/calendar-focused.png`)}/>: <Image source={require(`./img/calendar.png`)}/>;
      } else if (routeName === 'Inbox') {
        return (focused) ? <Image source={require(`./img/chat-focused.png`)}/>: <Image source={require(`./img/chat.png`)}/>;
      } else if (routeName === 'Profile') {
        return (focused) ? <Image source={require(`./img/profile-focused.png`)}/>: <Image source={require(`./img/profile.png`)}/>;
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

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});