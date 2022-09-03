import './WeatherMenu.css'

const WeatherMenu = () => {
  const weatherMenuOnMouseOverHandle = () => {
    document.getElementsByClassName('weatherMenu')[0].style.width = "20vw"
  }
  const weatherMenuOnMouseOutHandle = () => {
    document.getElementsByClassName('weatherMenu')[0].style.width = "4vw"
  }

  return (
    <div className="weatherMenu" onMouseOver={weatherMenuOnMouseOverHandle} onMouseOut={weatherMenuOnMouseOutHandle}>
      <div className="weatherMenuBg">
        <div className="weatherMenuBgLeft" />
        <div className="weatherMenuBgRight" />
        <div className="weatherMenuBgTop" />
        <div className="weatherMenuBgBottom" />
      </div>
    </div>
  )
}

export default WeatherMenu