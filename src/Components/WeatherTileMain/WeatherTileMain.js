import './WeatherTileMain.css'

const WeatherTileMain = (props) => {
  const className = `weatherTileMain tileWeather_${props.tileWeather}`
  const img = './icons/weather_1.png'

  return(
    <div className={className}>
      <div className="weatherInfo"> 
        <div className="weatherInfo_date">
          <div className="day">Today</div>
          <div className="date">18 September 2022</div>
          <div className="time">12:00AM</div>
        </div>
        <div className="weatherInfo_img">
          <img src={img} alt="weatherIcon"/>
        </div>
        <div className="weatherInfo_temp">
          <div className="temp">29&#176;C</div>
          <div className="tempName">Sunny</div>
          <div className="maxTemp">31&#176;C</div>
          <div className="minTemp">24&#176;C</div>
        </div>
      </div>
      <div className="weatherHourlyInfo">
        <div></div>
        <div className="separation"></div>
        <div></div>
        <div className="separation"></div>
        <div></div>
        <div className="separation"></div>
        <div></div>
      </div>
    </div>
  )
}

export default WeatherTileMain