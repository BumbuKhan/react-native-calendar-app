import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Calendar} from 'react-native-general-calendars';

import style from '../style';
import EventComponent from './EventComponent';

export default class CalendarScreen extends Component {
    render() {
        // a hardcoded data for a single event, in a real app will be fetched remotely
        const eventData = {
            title: 'Mode hos AZ WEB',
            description: 'Productionsvej 1, 2600 Glostrup',
            startTime: '12:00',
            endTime: '13:30',
        };

        return (
            <ScrollView style={[style.greyBg, style.commonPadding]}>
                <View style={style.calendarScreen}>
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

                <View style={style.eventList}>
                    <Text style={style.eventListTitle}>MINE AFTALER</Text>
                    <EventComponent {...eventData}/>
                </View>
            </ScrollView>
        );
    }
}