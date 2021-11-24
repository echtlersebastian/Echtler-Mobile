import React, { Component } from 'react';
import './Calendar.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import Button from '@material-ui/core/button'

import { DayPickerRangeController, DateRangePicker } from 'react-dates';


function isInArray(array, value) {
    return (array.find(item => { return item == value }) || []).length > 0;
}


class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: 'startDate',
            blockedDates: null,
        };
    }
    componentDidMount() {
        let blockedDates1 = [];

        fetch('api/Calendar/getBookedDates')
            .then(function (response) { return response.json(); })
            .then(function (data) {
                data.forEach(date => {
                    blockedDates1.push(date);
                })
            })//TODO: FIX!!
        this.setState({ blockedDates: blockedDates1 });
    }


 

    handleDateChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate });
    }

    handleFocusChange = focusedInput => {
        this.setState({ focusedInput: focusedInput || 'startDate' })
    }
    isDayBlocked = momentDate => {
        if (this.state.blockedDates != null) {
            console.log(this.state.blockedDates)
         return this.state.blockedDates.includes((momentDate.format().toString().substring(0, 10) + 'T00:00:00'));
        }
       return true
    }

    render() {

        return (
            <>
            <DayPickerRangeController
                onDatesChange={this.handleDateChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.handleFocusChange}
                startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    numberOfMonths={3}
                    enableOutsideDays
                    minimumNights={3}
                    isDayBlocked={this.isDayBlocked}
                />
                <Button onClick={() => { alert(this.state.blockedDates.includes("2022-11-10T00:00:00"))}}> TEST</Button>
                </>
        )

    }
}


export default Calendar;
