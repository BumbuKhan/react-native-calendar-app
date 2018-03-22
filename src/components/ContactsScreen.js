import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../style';

export default class ContactsScreen extends Component {
    render() {
      return (
        <View style={[style.screen, style.greyBg]}>
          <Text>Contacts</Text>
        </View>
      );
    }
  }