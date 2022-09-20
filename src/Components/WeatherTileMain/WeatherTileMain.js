import './WeatherTileMain.css'

const WeatherTileMain = (props) => {
  const className = `weatherTileMain tileWeather_${props.tileWeather}`
  const img = './icons/weather_1.png'

  return(
    <div className={className}>
      <div className="weatherInfo"> 
        <div className="weatherInfo_date">
          <div className="day">Day</div>
          <div className="dayName">Day Name</div>
          <div className="time">Hour</div>
        </div>
        <div className="weatherInfo_img">
          <img src={img} alt="weatherIcon"/>
        </div>
        <div className="weatherInfo_temp">
          <div className="temp">Temp</div>
          <div className="tempName">Temp Name</div>
          <div className="maxTemp">Max Temp</div>
          <div className="minTemp">Min Temp</div>
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