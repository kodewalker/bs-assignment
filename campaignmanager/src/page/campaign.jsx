import React, { Component } from 'react';
import {TabsComponent} from './components/tabs';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Data from '../data/compaignData.json';
import {Actions} from './components/actions';

class Campaign extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const columns=[{
            Header:'DATE',
            accessor:'createdOn',

        },
        {
            Header:'COMPAIGN',
            accessor:'name'
        },
        {
            Header:'VIEW',
            accessor:'price'
        },
        {
            Header:'ACTIONS',
            accessor:'createdOn',
            Cell:props => <Actions/>
        },]
        return (
            <div>
                <h3>{'Manage Campaigns'}</h3>
                <TabsComponent/>
                <div style={{marginTop:100,marginLeft:100,marginRight:100}}>
                    <ReactTable
                    data={Data.data}
                    columns={columns}
                    showPagination={false}
                    minRows={Data.data.length}
                    sortable={false}/></div>
            </div>
        )
    }
}
export default Campaign;