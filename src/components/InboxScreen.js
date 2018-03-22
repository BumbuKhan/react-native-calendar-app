import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../style';

export default class InboxScreen extends Component {
    render() {
        return (
            <View style={[style.screen, style.greyBg]}>
                <Text>Inbox</Text>
            </View>
        );
    }
}