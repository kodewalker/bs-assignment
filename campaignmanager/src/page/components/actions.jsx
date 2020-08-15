
import React from 'react';
import csvLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 3/file.png'
import reportLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group 2/statistics-report.png'
import calLogo from '../../Images/inspect/Front-End/Page/Dashboard/Row/Group/calendar.png'
import Calendar from 'react-calendar';

export const Actions = () => {
    return (
        <div className="d-flex justify-content-start">
            <img className="p-2" src={csvLogo} alt="csv" />
            <p style={{ alignSelf: 'center' }}>{'CSV'}</p>

            <img className="p-2" src={reportLogo} alt="csv" />
            <p style={{ alignSelf: 'center' }}> {'Report'}</p>

            <img className="p-2" src={calLogo} alt="csv" />
            <p style={{ alignSelf: 'center' }}>{'Schedule Again'}</p>
            <div>
        
      </div>

        </div>
    )
}