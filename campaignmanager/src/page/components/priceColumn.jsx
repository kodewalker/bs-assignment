
import React from 'react';
import priceLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 4/Price.png'

export const PriceComponent = (props) => {
    const {onClick} = props
    return (
        <div onClick={onClick} className="d-flex" style={{ justifyContent: 'center' }}>
                    <img style={{ height: 50, width: 50, borderRadius: 25 }} className="p-2" src={priceLogo} alt="csv" />
                    <p style={{ alignSelf: 'center' }}>{'Pricing'}</p>
                </div>

    )
}