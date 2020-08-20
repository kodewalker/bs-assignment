import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const PricingModal = (props) => {
    const { pricingData, showPricing, onClick } = props
    return (
        <Modal show={showPricing}>

            <Modal.Body>
                <div className="d-flex justify-content-start">

                    <img style={{ height: 137, width: 137 }} className="p-2" src={pricingData["image_url"]} alt="csv" />
                    <div style={{marginTop:40}}>
                        <div className="gameName">{pricingData.name}</div>
                        <div  className="regionModal">{pricingData.region}</div>
                    </div>
                </div>

                <div className="Pricing">Pricing</div>

                <div style={{marginLeft:20,marginRight:20, justifyContent: 'space-between' }} className="d-flex">
                    <div className="pricingRow">1 week- 1 month</div><div className="price">{pricingData.price && '$ '+ pricingData.price.weekly}</div>
                
                </div>
                <div style={{marginLeft:20,marginRight:20, justifyContent: 'space-between' }} className="d-flex">
                    <div className="pricingRow">6 Months</div><div className="price">{pricingData.price && '$ '+pricingData.price.halfYearly}</div>
                </div>

                <div style={{marginLeft:20,marginRight:20, justifyContent: 'space-between' }} className="d-flex">
                    <div className="pricingRow"> 1 Year</div>
                    <div className="price">{pricingData.price && '$ '+pricingData.price.annually}</div>
                </div>
                <div className="d-flex justify-content-center">
                <Button className="button" variant="secondary" onClick={props.onClick}>
                    Close
          </Button></div>
            </Modal.Body>

        </Modal>
    )
}