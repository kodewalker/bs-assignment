import React, { Component } from 'react';
import { TabsComponent } from './components/tabs';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Data from '../data/compaignData.json';
import { Actions } from './components/actions';
import Moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from 'lodash';
import { PricingModal } from './components/pricingModal';
import { DateComponent } from './components/dateColumn';
import {NameComponent} from './components/nameColumn';
import {PriceComponent} from './components/priceColumn';
import '../App.css';
import logo from '../Images/logo.png';

class Campaign extends Component {
    constructor() {
        super();
        this.state = {
            dataToDisplay: [],
            datePickerIsOpen: false,
            showPricing: false,
            pricingData: {},
            Data: Data.data
        }
    }

    componentDidMount() {
        //to get the filtered data for upcoming tab on load of page 
        this.filterData('upcoming')

    }

    //to filter the data based on date for selected tab 
    filterData(param) {
        const { Data } = this.state
        if (param === 'upcoming')
            var filteredData = _.filter(Data, (item) => Moment(item.createdOn).isAfter(new Date(), 'day'))

        else if (param === 'live')
            var filteredData = _.filter(Data, (item) => Moment(item.createdOn).isSame(new Date(), 'day'))

        else
            var filteredData = _.filter(Data, (item) => Moment(item.createdOn).isBefore(new Date(), 'day'))

        this.setState({
            dataToDisplay: filteredData,
            selectedTab: param
        })
    }
    //to update the data when date is changed
    handleDateChange(date) {
        const { Data, clickedData, datePickerIsOpen, selectedTab } = this.state
        const a = _.find(Data, (o) => { return (o.uniqueKey === clickedData.original.uniqueKey) });
        a.createdOn = date
        this.setState({
            datePickerIsOpen: !datePickerIsOpen,
        }, () => this.filterData(selectedTab));
    }
    //to open the calender on clicking of icon
    openDatePicker(props) {
        this.setState({
            datePickerIsOpen: !this.state.datePickerIsOpen,
            clickedData: props,
        });
    };

    onClickingPrice(props) {
        this.setState({
            showPricing: true,
            pricingData: props.original
        })
    }
    render() {
        const { dataToDisplay, datePickerIsOpen, pricingData, showPricing, selectedTab } = this.state

        const columns = [{
            Header: 'DATE',
            accessor: 'createdOn',
            width:180,
            Cell: props => <DateComponent date={props.original[props.column.id]} selectedTab={selectedTab} />

        },
        {
            Header: 'COMPAIGN',
            accessor: 'name',
            width:200,
            Cell: props => <NameComponent data={props}/>
        },
        {
            Header: 'VIEW',
            accessor: 'price',
            width:180,
            Cell: props => <PriceComponent onClick={() => this.onClickingPrice(props)}/>
        },
        {
            Header: 'ACTIONS',
            accessor: 'createdOn',
            width:600,
            Cell: props => <Actions onClick={() => this.openDatePicker(props)} />
        },]
        return (
            <div>
                <div className="d-flex justify-content-start TitleBar">
                <img  className="logo" src={logo} alt="csv" /></div>
                <h3 className="Title">{'Manage Campaigns'}</h3>
                <div 
                    className="d-flex justify-content-start Tabs">
                <TabsComponent
                    onSelect={(k) => this.filterData(k)} />
                    </div>
                <div className="App-table">
                    <ReactTable
                        data={dataToDisplay}
                        columns={columns}
                        showPagination={false}
                        minRows={0}
                        sortable={false} />
                {/* calender to select date */}
                    <DatePicker
                        onChange={(date) => this.handleDateChange(date)}
                        onClickOutside={() => this.setState({ datePickerIsOpen: false })}
                        open={datePickerIsOpen}
                        customInput={<div />}
                    /></div>

                {/* modal box to display pricing details */}
                <PricingModal
                    pricingData={pricingData}
                    onClick={() => this.setState({ showPricing: false })}
                    showPricing={showPricing}
                />

            </div>
        )
    }
}
export default Campaign;