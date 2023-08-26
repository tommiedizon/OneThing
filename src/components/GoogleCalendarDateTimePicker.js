import { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Button,View} from 'react-native';

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
  
    return date;
}

async function createCalendarEvent(startingTime) {
    const accessToken = (await (GoogleSignin.getTokens())).accessToken;
    const response = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    const calendarData = await response.json();
    const calendarId = calendarData.items[0].id;
    const endingTime = addHours(startingTime, 1);
    console.log(endingTime)
    const eventCreation = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            end: {
                'dateTime': endingTime
            },
            start: {
                'dateTime': startingTime
            }
        })
    });

    const data = eventCreation.json();
    console.log(eventCreation.status);
    console.log(data);
}

export default function GoogleCalendarDateTimePicker() {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false)

    return (
        <View>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker 
        modal
        date={date}
        open={open}
        onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            createCalendarEvent(date);
          }}
        onCancel={() => {
        setOpen(false);
        }}
          ></DatePicker>
          </View>
    )
}