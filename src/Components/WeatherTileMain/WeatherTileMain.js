import './WeatherTileMain.css'

const WeatherTileMain = (props) => {
  const className=`weatherTileMain tileWeather_${props.tileWeather}`

  return(
    <div className={className}>
      <div className="weatherInfo"> 
        <div className="weatherInfo_date">
          <h1>One</h1>
          <h1>Two</h1>
          <h1>Three</h1>
        </div>
        <div className="weatherInfo_img">

        </div>
        <div className="weatherInfo_temp">

        </div>
      </div>
      <div className="weatherHourlyInfo">

      </div>
    </div>
  )
}

export default WeatherTileMain