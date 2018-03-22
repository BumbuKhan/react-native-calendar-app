import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Hello World</Text>
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