
import React from 'react';
import priceLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 4/Price.png'

export const PriceComponent = (props) => {
    const {onClick} = props
    return (
        <div onClick={onClick} className="d-flex action">
                    <img  className="pricingImg" src={priceLogo} />
                    <p className="pricingLabel">{'Pricing'}</p>
                </div>

    )
}