import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owf owf-${reading.weather[0].id} owf-2x`

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        {/* <h2>{(Math.round((reading.main.temp) - 273.15) * (9 / 5) + 32)}°F</h2> */}
        <h2>{ Math.round((Math.round((reading.main.temp) - 273.15) * (9 / 5) + 32) * 100) / 100 }°F</h2>
        <p>Feels like: { Math.round((Math.round((reading.main.feels_like) - 273.15) * (9 / 5) + 32) * 100) / 100 }°F</p>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;