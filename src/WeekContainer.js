import React from 'react';
import DayCard from './DayCard';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?q=wa"

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div className="container">
      <h5 className="display-5 text-muted">Washington DC</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer;





























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DayCard from './DayCard';

// export default function WeekContainer() {

//   const [weatherData, setWeatherData] = useState(null)
//   const [dailyData, setDailyData] = useState(null)

//   const getWeather = async () => {
//     try {
//       const allWeather = await
//         axios.get("http://http://api.openweathermap.org/data/2.5/forecast?q=washington%20dc&appid=e105b2471e9a49259d541db921f2e921")
//       console.log(allWeather)
//       // setWeatherData(allWeather.data.list); //set State
//       // const dailyData = allWeather.data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
//       // setDailyData(dailyData)
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getWeather()
//   }, []);

//   return (
//     <div>
//       <div className="container" style={{borderStyle: 'solid'}}>
//         <h1> 5 Day Forecast</h1>
//         <h5>Washington, DC</h5>
//         <div style={{borderStyle: 'dotted'}}>
//      {/* {dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)} */}
//         </div>
        
//       </div>



//     </div>
//   )
// }


