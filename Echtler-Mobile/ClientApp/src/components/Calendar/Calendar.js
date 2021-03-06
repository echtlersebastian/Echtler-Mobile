import React, { Component } from 'react';
import './Calendar.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import deLocale from 'moment/locale/de';

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
            focusedInput: null,
            blockedDates: [],
            screenWidth: null,
            monthCount: 3,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        moment.locale('de', deLocale);
        window.addEventListener("resize", this.updateWindowDimensions);
        this.updateWindowDimensions();
        let blockedDates1 = [];
        fetch('api/Calendar/getBookedDates')
            .then(function (response) { return response.json(); })
            .then(function (data) {
                data.forEach(date => {
                    blockedDates1.push(date);
                })
            }).then(() => {
                this.resize();

            })
            .then(() => {

                this.setState({ blockedDates: blockedDates1 });
                this.setState({ startDate: moment() })
                this.setState({ focusedInput: 'startDate' })
            })
    }

    resize = () => {

        if (this.state.screenWidth >= 1600) {
            this.setState({ monthCount: 3 });
        } else if (this.state.screenWidth >= 800) {
            this.setState({ monthCount: 2 });
        } else if (this.state.screenWidth >= 600) {
            this.setState({ monthCount: 1 });
        }

    }
    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
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
        return true;
    }

    render() {
        return (
            <>
                <br />
                <h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Hier die Verf&uuml;gbarkeit pr&uuml;fen:</h1>
                <br />

                <DayPickerRangeController style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    onDatesChange={this.handleDateChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.handleFocusChange}
                    initialStartDate={moment()}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    numberOfMonths={this.state.monthCount}
                    enableOutsideDays
                    minimumNights={3}
                    isDayBlocked={this.isDayBlocked}
                    enableOutsideDays={false}
                />
            </>
        )

    }
}


export default Calendar;
