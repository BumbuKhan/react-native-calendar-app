import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Tabs from 'react-native-tabs'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.container}>
        <Text>
          Hello world
        </Text>

        <Text>
          Viewing {this.state.curPage}
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
  }
});

export default App;