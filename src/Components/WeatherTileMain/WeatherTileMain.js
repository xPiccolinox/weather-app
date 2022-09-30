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
          <div className="time">12:00
            <sup>AM</sup>
          </div>
        </div>
        <div className="weatherInfo_img">
          <img src={img} alt="weatherIcon"/>
        </div>
        <div className="weatherInfo_temp">
          <div className="temp">
            <div className="tempDiv">
              29
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
          </div>
          <div className="tempName">Sunny</div>
          <div className="maxTemp">
            <div className="tempDiv">
              <div className="maxTempArrow"/>31
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
          </div>
          <div className="minTemp">
            <div className="tempDiv">
              <div className="minTempArrow"/>24
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
          </div>
        </div>
      </div>
      <div className="weatherHourlyInfo">
        <div className="weatherHourlyTile">
          <img src={img} alt="weatherHourlyInfoIcon"/>
          <div className="tempDiv">
              29
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
            <div className="timeDiv">
              3:00
              <sup>PM</sup>
            </div>
        </div>
        <div className="weatherHourlySeparation"/>
        <div className="weatherHourlyTile">

        </div>
        <div className="weatherHourlySeparation"/>
        <div className="weatherHourlyTile">

        </div>
        <div className="weatherHourlySeparation"/>
        <div className="weatherHourlyTile">

        </div>
      </div>
    </div>
  )
}

export default WeatherTileMain