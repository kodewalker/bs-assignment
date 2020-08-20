import React from 'react';
import Moment from 'moment';
import '../../App.css';

export const DateComponent = (props) => {
    const { selectedTab, date } = props
    //to get the date difference and display text
    const getDateDifference = (date) => {
        if (selectedTab === 'live') {
            return 'Today'
        }
        else
            if (selectedTab === 'upcoming') {
                let a = Moment(new Date(date));
                let b = Moment(new Date());
                return a.diff(b, 'days') + ' Days to go'
            }
            else {
                let a = Moment(new Date(date));
                let b = Moment(new Date());
                return b.diff(a, 'days') + ' Days Ago'
            }
    }
    
    return (
        <div className="justify-content-start action">
            <div className="Date">{Moment(new Date(date)).format("DD-MMM-YYYY")}</div>
            <div className="Days">{getDateDifference(date)}</div>
        </div>
    )
}