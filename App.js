import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Calendar} from 'react-native-general-calendars';

class HomeScreen extends Component {
  render() {
    return (
      <View style={[style.screen, style.greyBg]}>
        <Text>Home</Text>
      </View>
    );
  }
}

class ContactsScreen extends Component {
  render() {
    return (
      <View style={[style.screen, style.greyBg]}>
        <Text>Contacts</Text>
      </View>
    );
  }
}

class CalendarScreen extends Component {
  render() {
    return (
      <View style={[style.calendarScreen, style.greyBg]}>
        <View>
          <Text style={style.calendarTitle}>Calendar</Text>
          <Calendar
            // Calendar type (gregorian, jalaali). Default = gregorian
            type={'gregorian'}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'MMM YYYY'}
            // Hide day names. Default = false
            hideDayNames={true}
            // hardcoded, in real app might be fetched from some remote API
            markedDates={{
              '2018-03-22': {selected: true, selectedColor: '#8AC44C'},
              '2018-03-24': {marked: true, dotColor: '#8AC44C'},
              '2018-03-26': {marked: true, dotColor: '#8AC44C'},
              '2018-03-29': {marked: true, dotColor: '#8AC44C'}
            }}
          />
        </View>
      </View>
    );
  }
}

class InboxScreen extends Component {
  render() {
    return (
      <View style={[style.screen, style.greyBg]}>
        <Text>Inbox</Text>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <View style={[style.screen, style.greyBg]}>
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
  },
  greyBg: {
    backgroundColor: '#EFF3F6'
  },
  calendarScreen: {
    flex: 1,
    padding: 24
  },
  calendarTitle: {
    backgroundColor: 'white',
    fontSize: 30,
    color: '#8AC44C',
    padding: 17
  }
});