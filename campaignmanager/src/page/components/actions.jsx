
import React from 'react';
import csvLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 3/file.png'
import reportLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 2/statistics-report.png'
import calLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group/calendar.png'

export const Actions = (props) => {
    const {onClick} = props
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center' }} className="d-flex justify-content-start">
                        <img style={{ height: 40, width: 35 }} className="p-2" src={csvLogo} alt="csv" />
                        <p style={{ alignSelf: 'center', marginTop: 20 }}>{'CSV'}</p>

                        <img style={{ height: 40, width: 35 }} className="p-2" src={reportLogo} alt="csv" />
                        <p style={{ alignSelf: 'center', marginTop: 20 }}> {'Report'}</p>

                        <img style={{ height: 40, width: 35 }}
                            onClick={onClick} className="p-2" src={calLogo} alt="csv" />
                        <p onClick={onClick}
                         style={{ alignSelf: 'center', marginTop: 20 }}>{'Schedule Again'}</p>
                    </div>

    )
}