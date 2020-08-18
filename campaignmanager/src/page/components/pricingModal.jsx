import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const PricingModal = (props) => {
    const { pricingData, showPricing, onClick } = props
    return (
        <Modal show={showPricing}>

            <Modal.Body>
                <div className="d-flex justify-content-start">

                    <img style={{ height: 100, width: 100 }} className="p-2" src={pricingData["image_url"]} alt="csv" />
                    <div style={{ marginTop: 40 }}>
                        <div>{pricingData.name}</div>
                        <div style={{ marginLeft: 20 }}>{pricingData.region}</div>
                    </div>
                </div>

                <div style={{ fontSize: 24 }}>Pricing</div>

                <div style={{marginLeft:20,marginRight:20, justifyContent: 'space-between' }} className="d-flex">
                    <div>1 week- 1 month</div><div>{pricingData.price && pricingData.price.weekly}</div>
                
                </div>
                <div style={{marginLeft:20,marginRight:20, justifyContent: 'space-between' }} className="d-flex">
                    <div>6 Months</div><div>{pricingData.price && pricingData.price.halfYearly}</div>
                </div>

                <div style={{marginLeft:20,marginRight:20, justifyContent: 'space-between' }} className="d-flex">
                    <div>1 Year</div><div>{pricingData.price && pricingData.price.annually}</div>
                </div>
                <Button style={{marginTop:20}} variant="secondary" onClick={props.onClick}>
                    Close
          </Button>
            </Modal.Body>

        </Modal>
    )
}