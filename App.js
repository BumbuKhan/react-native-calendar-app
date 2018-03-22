import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
            selectedStyle={{color: '#8CC540'}}
            onSelect={el => this.setState({curPage: el.props.name})}
        >
          <Text name='first'>Home</Text>
          <Text name='second'>Contacts</Text>
          <Text name='third'>Calendar</Text>
          <Text name='forth'>Inbox</Text>
          <Text name='fifth'>Profile</Text>
        </Tabs>
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
  }
});

export default App;