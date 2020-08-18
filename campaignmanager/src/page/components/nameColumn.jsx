
import React from 'react';

export const NameComponent = (props) => {
    const {data} = props
    return (
        <div style={{ justifyContent: 'center' }} className="d-flex justify-content">
                    <img style={{ height: 50, width: 50 }} className="p-2" src={data.original['image_url']} />
                    <div><p style={{ alignSelf: 'center' }}>{data.original[data.column.id]}</p>
                        <p style={{ alignSelf: 'center' }}>{data.original.region}</p></div>
                </div>

    )
}