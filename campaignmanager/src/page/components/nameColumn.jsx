
import React from 'react';
import '../../App.css';

export const NameComponent = (props) => {
    const { data } = props
    return (
        <div className="d-flex justify-content-start action">
            <img className="p-2 mainImage" src={data.original['image_url']} />
            <div style={{ marginTop: 10 }}>
                <div className="name">{data.original[data.column.id]}</div>
                <div className="region">{data.original.region}</div></div>
        </div>

    )
}