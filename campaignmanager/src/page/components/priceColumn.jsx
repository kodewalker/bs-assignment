
import React from 'react';
import priceLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 4/Price.png'
import '../../App.css';

export const PriceComponent = (props) => {
    const {onClick} = props
    return (
        <div onClick={onClick} className="d-flex justify-content-start action">
                    <img  className="p-2 actionItem" src={priceLogo} />
                    <p className="actionLabels">{'Pricing'}</p>
                </div>

    )
}