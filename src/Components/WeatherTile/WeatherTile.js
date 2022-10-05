import './WeatherTile.css'

const WeatherTile = (props) => {
  const className=`weatherTile tileWeather_${props.tileWeather}`
  const img1 = './icons/weather_1.png'
  const img2 = './icons/weather_2.png'
  const img3 = './icons/weather_3.png'
  const img4 = './icons/weather_4.png'

  return(
    <div className={className}>
      <div className="weatherInfo"> 
        <div className="weatherInfo_date">
          <div className="day">Today</div>
          <div className="date">18 September 2022</div>
          <div className="time">12:00
            <div className="period">AM</div>
          </div>
        </div>
        <div className="weatherInfo_img">
          <img src={img1} alt="weatherIcon"/>
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
        </div>
      </div>
      <div className="weatherHourlyInfo">
        <div className="weatherHourlyTile">
          <img src={img1} alt="weatherHourlyInfoIcon"/>
          <div className="tempDiv">
              31
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
            <div className="timeDiv">
              3:00
              <div className="period">PM</div>
            </div>
        </div>
        <div className="weatherHourlySeparation"/>
        <div className="weatherHourlyTile">
          <img src={img2} alt="weatherHourlyInfoIcon"/>
          <div className="tempDiv">
              28
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
            <div className="timeDiv">
              6:00
              <div className="period">PM</div>
            </div>
        </div>
        <div className="weatherHourlySeparation"/>
        <div className="weatherHourlyTile">
          <img src={img3} alt="weatherHourlyInfoIcon"/>
          <div className="tempDiv">
              26
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
            <div className="timeDiv">
              9:00
              <div className="period">PM</div>
            </div>
        </div>
        <div className="weatherHourlySeparation"/>
        <div className="weatherHourlyTile">
          <img src={img4} alt="weatherHourlyInfoIcon"/>
          <div className="tempDiv">
              24
              <div className="tempDegree">&#176;</div>
              <div className="tempCelcius">c</div>
            </div>
            <div className="timeDiv">
              12:00
              <div className="period">PM</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherTile