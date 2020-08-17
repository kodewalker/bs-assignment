import React, { Component } from 'react';
import { TabsComponent } from './components/tabs';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Data from '../data/compaignData.json';
import { Actions } from './components/actions';
import Moment from 'moment';
import priceLogo from '../Images/inspect/Front-End/Page/Dashboard/Row/Group 4/Price.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import csvLogo from '../Images/inspect/Front-End/Page/Dashboard/Row/Group 3/file.png'
import reportLogo from '../Images/inspect/Front-End/Page/Dashboard/Row/Group 2/statistics-report.png'
import calLogo from '../Images/inspect/Front-End/Page/Dashboard/Row/Group/calendar.png'
import _ from 'lodash';
import { Tab, Tabs, Modal, Button } from 'react-bootstrap';

class Campaign extends Component {
    constructor() {
        //sessionStorage.setItem('cData',Data.data)
        super();
        this.state = {
            dataToDisplay: [],
            startDate: new Date(),
            datePickerIsOpen: false,
            showPricing: false,
            pricingData: {},
            Data: Data.data
        }
    }

    componentDidMount() {
        this.filterData('upcoming')

    }
    handleDateChange(date) {
        const a = _.find(this.state.Data, (o) => { return (o.uniqueKey == this.state.clickedData.original.uniqueKey) });
        a.createdOn = date
        this.setState({
            startDate: date,
            datePickerIsOpen: !this.state.datePickerIsOpen,
        }, () => this.filterData(this.state.selectedTab));
    }
    openDatePicker(props) {
        this.setState({
            datePickerIsOpen: !this.state.datePickerIsOpen,
            startDate: new Date(props.original[props.column.id]),
            clickedData: props,
        });
    };
    filterData(param) {
        console.log(this.state.Data, 'complete Data', param, 'selected tab')

        if (param == 'upcoming') {
            var filteredData = _.filter(this.state.Data, (item) => Moment(item.createdOn).isAfter(new Date(), 'day'))
            this.setState({
                dataToDisplay: filteredData,
                selectedTab: param
            })
        }
        else if (param == 'live') {
            var filteredData = _.filter(this.state.Data, (item) => Moment(item.createdOn).isSame(new Date(), 'day'))
            this.setState({
                dataToDisplay: filteredData,
                selectedTab: param

            })
        }
        else {
            var filteredData = _.filter(this.state.Data, (item) => Moment(item.createdOn).isBefore(new Date(), 'day'))
            this.setState({
                dataToDisplay: filteredData,
                selectedTab: param

            })
        }

    }
    getDateDifference(date) {
        if (this.state.selectedTab == 'live') {
            return 'Today'
        }
        else
            if (this.state.selectedTab == 'upcoming') {
                var a = Moment(new Date(date));
                var b = Moment(new Date());
                return a.diff(b, 'days') + ' Days to go'
            }
            else {
                var a = Moment(new Date(date));
                var b = Moment(new Date());
                return b.diff(a, 'days') + ' Days Ago'
            }
    }
    onClickingPrice(props) {
        this.setState({
            showPricing: true,
            pricingData: props.original
        })
    }
    render() {
        const columns = [{
            Header: 'DATE',
            accessor: 'createdOn',
            Cell: props => {
                return (<div><div>{Moment(new Date(props.original[props.column.id])).format("DD-MMM-YYYY")}</div>
                    <div>{this.getDateDifference(props.original[props.column.id])}</div>
                </div>
                )
            }

        },
        {
            Header: 'COMPAIGN',
            accessor: 'name',
            Cell: props => {
                return (<div className="d-flex justify-content">
                    <img style={{ height: 50, width: 50}} className="p-2" src={props.original['image_url']} alt="csv" />
                    <div><p style={{ alignSelf: 'center' }}>{props.original[props.column.id]}</p>
                        <p style={{ alignSelf: 'center' }}>{props.original.region}</p></div>
                </div>)
            }
        },
        {
            Header: 'VIEW',
            accessor: 'price',
            Cell: props => {
                return (<div onClick={() => this.onClickingPrice(props)} className="d-flex justify-content-start">
                    <img style={{ height: 50, width: 50, borderRadius: 25 }} className="p-2" src={priceLogo} alt="csv" />
                    <p style={{ alignSelf: 'center' }}>{'Pricing'}</p>
                </div>)
            }
        },
        {
            Header: 'ACTIONS',
            accessor: 'createdOn',
            Cell: props => {
                return (
                    <div style={{ justifyContent: 'center', alignItems: 'center' }} className="d-flex justify-content-start">
                        <img style={{ height: 40, width: 35 }} className="p-2" src={csvLogo} alt="csv" />
                        <p style={{ alignSelf: 'center', marginTop: 20 }}>{'CSV'}</p>

                        <img style={{ height: 40, width: 35 }} className="p-2" src={reportLogo} alt="csv" />
                        <p style={{ alignSelf: 'center', marginTop: 20 }}> {'Report'}</p>

                        <img style={{ height: 40, width: 35 }}
                            onClick={() => this.openDatePicker(props)} className="p-2" src={calLogo} alt="csv" />
                        <p style={{ alignSelf: 'center', marginTop: 20 }}>{'Schedule Again'}</p>
                    </div>)
            }
        },]
        return (
            <div>
                <h3>{'Manage Campaigns'}</h3>
                <Tabs onSelect={(k) => this.filterData(k)} defaultActiveKey="upcoming" id="uncontrolled-tab-example">
                    <Tab styles={{ margin: 10 }} eventKey="upcoming" title="Upcoming Campaigns">
                    </Tab>
                    <Tab eventKey="live" title="Live Campaigns">
                    </Tab>
                    <Tab eventKey="past" title="Past Campaigns">
                    </Tab>
                </Tabs>                <div style={{ marginTop: 100, marginLeft: 100, marginRight: 100 }}>
                    <ReactTable
                        data={this.state.dataToDisplay}
                        columns={columns}
                        showPagination={false}
                        minRows={0}
                        sortable={false} />
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={(date) => this.handleDateChange(date)}
                        onClickOutside={() => this.setState({ datePickerIsOpen: false })}
                        open={this.state.datePickerIsOpen}
                        customInput={<div />}
                    /></div>

                <Modal show={this.state.showPricing}>

                    <Modal.Body>
                        <img style={{ height: 100, width: 100 }} className="p-2" src={this.state.pricingData["image_url"]} alt="csv" />
                        <div>{this.state.pricingData.name}</div>
                        <div>{this.state.pricingData.region}</div>
                        <div>Pricing</div>
                        <div>1 week- 1 month</div><div>{this.state.pricingData.price && this.state.pricingData.price.weekly}</div>
                        <div>6 Months</div><div>{this.state.pricingData.price && this.state.pricingData.price.halfYearly}</div>
                        <div>1 Year</div><div>{this.state.pricingData.price && this.state.pricingData.price.anually}</div>
                        <Button variant="secondary" onClick={() => this.setState({ showPricing: false })}>
                            Close
          </Button>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}
export default Campaign;