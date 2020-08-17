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
import { Tab, Tabs, Modal,ModalBody,ModalTitle,ModalFooter,Button} from 'react-bootstrap';

class Campaign extends Component {
    constructor() {
        super();
        this.state = {
            dataToDisplay: [],
            startDate: new Date(),
            datePickerIsOpen: false,
            showPricing:false
        }
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    openDatePicker() {
        this.setState({
            datePickerIsOpen: !this.state.datePickerIsOpen,
        });
    };
    componentDidMount() {
        this.filterData('upcoming')

    }
    filterData(param) {


        if (param == 'upcoming') {
            var filteredData = _.filter(Data.data, (item) => Moment(item.createdOn).isAfter(new Date(), 'day'))
            this.setState({
                dataToDisplay: filteredData
            })
        }
        else if (param == 'live') {
            var filteredData = _.filter(Data.data, (item) => Moment(item.createdOn).isSame(new Date(), 'day'))
            this.setState({
                dataToDisplay: filteredData
            })
        }
        else {
            var filteredData = _.filter(Data.data, (item) => Moment(item.createdOn).isBefore(new Date(), 'day'))
            this.setState({
                dataToDisplay: filteredData
            })
        }



    }
    getDateDifference(date) {
        if(this.state)
        var a = Moment(new Date(date));
        var b = Moment(new Date());
        if(b>a){
        return b.diff(a, 'days')+' Days'
        }
        if(a>b){
        return a.diff(b,'days')+ ' Days'
        }
        else {
            return ''
        }
        

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
                return (<div className="d-flex justify-content-start">
                    <img style={{ height: 50, width: 50, borderRadius: 25 }} className="p-2" src={props.original['image_url']} alt="csv" />
                    <p style={{ alignSelf: 'center' }}>{props.original[props.column.id]}</p>
                </div>)
            }
        },
        {
            Header: 'VIEW',
            accessor: 'price',
            Cell: props => {
                return (<div onClick={()=>this.setState({showPricing:true})} className="d-flex justify-content-start">
                    <img className="p-2" src={priceLogo} alt="csv" />
                    <p style={{ alignSelf: 'center' }}>{'Pricing'}</p>
                </div>)
            }
        },
        {
            Header: 'ACTIONS',
            accessor: 'createdOn',
            Cell: props => {
                return (
                    <div className="d-flex justify-content-start">
                        <img className="p-2" src={csvLogo} alt="csv" />
                        <p style={{ alignSelf: 'center' }}>{'CSV'}</p>

                        <img className="p-2" src={reportLogo} alt="csv" />
                        <p style={{ alignSelf: 'center' }}> {'Report'}</p>

                        <img onClick={() => this.openDatePicker()} className="p-2" src={calLogo} alt="csv" />
                        <p style={{ alignSelf: 'center' }}>{'Schedule Again'}</p>
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
                        minRows={Data.data.length}
                        sortable={false} />
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={() => alert('hi')}
                        onClickOutside={this.openDatePicker}
                        open={this.state.datePickerIsOpen}
                        customInput={<div />}
                    /></div>

 <Modal show={this.state.showPricing}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.setState({showPricing:false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.setState({showPricing:false})}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}
export default Campaign;