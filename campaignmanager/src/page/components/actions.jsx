
import React from 'react';
import csvLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 3/file.png'
import reportLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 2/statistics-report.png'
import calLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group/calendar.png'

export const Actions = (props) => {
    const {onClick} = props
    return (
        <div className="d-flex justify-content-start action">
                        <img  className="actionItem" src={csvLogo} alt="csv" />
                        <p className="actionLabels">{'CSV'}</p>

                        <img className="actionItem" src={reportLogo} alt="csv" />
                        <p className="actionLabels"> {'Report'}</p>

                        <img className="actionItem" onClick={onClick} src={calLogo} />
                        <p onClick={onClick}
                         className="actionLabels">{'Schedule Again'}</p>
                    </div>

    )
}