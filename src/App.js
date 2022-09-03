import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './Menu/Menu';
import WeatherMenu from './WeatherMenu/WeatherMenu';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <img className="weatherBackground" src="./images/weather.png"  alt="weather.png" />
        <div className="searchBar">

        </div>
        <Menu />
        <div className="weather">

        </div>
        <WeatherMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
