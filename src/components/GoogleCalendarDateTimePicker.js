import { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button, View } from 'react-native';

import moment, { min } from "moment";

function addHours(date, hours) {
    return moment(date.toISOString()).add(1, 'hours')
    // date.setHours(date.getHours() + hours * 60 * 60 * 1000);
    // return date;
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
    const endingTime = addHours(new Date(startingTime), 1);
    const eventCreation = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            summary: "OneThing: Basketball",
            end: {
                'dateTime': endingTime,
                'timeZone': 'Australia/Sydney'
            },
            start: {
                'dateTime': startingTime,
                'timeZone': "Australia/Sydney"
            }
        })
    });

    const data = eventCreation.json();
    console.log(eventCreation.status);
}

export default function GoogleCalendarDateTimePicker() {
    const [date, setDate] = useState(new Date(moment()));
    const [open, setOpen] = useState(false)


    return (
        <View>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker 
        modal
        date={date}
        open={open}
        minimumDate={new Date("2023-08-26")}
        maximumDate={new Date("2023-09-03")}
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