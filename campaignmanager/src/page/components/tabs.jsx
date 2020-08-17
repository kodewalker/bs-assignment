import React from 'react';
import { Tab,Tabs } from 'react-bootstrap';

export const TabsComponent =()=>{
    return(
        <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
                    <Tab styles={{margin:10}} eventKey="upcoming" title="Upcoming Campaigns">
                    </Tab>
                    <Tab eventKey="live" title="Live Campaigns">
                    </Tab>
                    <Tab eventKey="past" title="Past Campaigns">
                    </Tab>
                </Tabs>
    )
}