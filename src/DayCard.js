import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owf owf-${reading.weather[0].id} owf-2x`

  return (
    <div className="col-sm-2">
      <div className="card" style={{backgroundColor: '#EDEDEA', borderRadius: '30px'}}>
        <h3 className="card-title" style={{textAlign: 'center', marginTop: '20px'}}>{moment(newDate).format('dddd')}</h3>
        <p className="text-muted" style={{textAlign: 'center'}}>{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        <h2 style={{textAlign: 'center'}}>{ Math.round((Math.round((reading.main.temp) - 273.15) * (9 / 5) + 32) * 100) / 100 }°F</h2>
        <p style={{textAlign: 'center'}}>Feels like: { Math.round((Math.round((reading.main.feels_like) - 273.15) * (9 / 5) + 32) * 100) / 100 }°F</p>
        <div className="card-body">
          <p className="card-text"  style={{textAlign: 'center'}}>{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;