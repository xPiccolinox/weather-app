import './WeatherTile.css'

const WeatherTile = (props) => {
  const className=`weatherTile tileWeather_${props.tileWeather}`

  return(
    <div className={className}>
      
    </div>
  )
}

export default WeatherTile