import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Tabs from 'react-native-tabs'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {curPage: 'third'}
  }

  render() {
    return (
      <View style={style.container}>
        <Tabs
            selected={this.state.curPage}
            style={{backgroundColor: 'white'}}
            onSelect={el => this.setState({curPage: el.props.name})}
        >
          <View name='first' style={style.tabItem}>
            <Image source={require('./img/home.png')}/>
            <Text>Home</Text>
          </View>

          <View name='second' style={style.tabItem}>
            <Image source={require('./img/users.png')}/>
            <Text>Contacts</Text>
          </View>

          <View name='third' style={style.tabItem}>
            <Image source={require('./img/calendar.png')}/>
            <Text>Calendar</Text>
          </View>

          <View name='third' style={style.tabItem}>
            <Image source={require('./img/chat.png')}/>
            <Text>Inbox</Text>
          </View>

          <View name='third' style={style.tabItem}>
            <Image source={require('./img/settings.png')}/>
            <Text>Profile</Text>
          </View>
        </Tabs>

        <Text>
          Hello world
        </Text>

        
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;