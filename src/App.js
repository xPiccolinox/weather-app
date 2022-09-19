import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import db from './Database/db.json'
import WeatherTile from './Components/WeatherTile/WeatherTile';
import WeatherTileMain from './Components/WeatherTileMain/WeatherTileMain';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  for (let i=0; i<40; i++) {
    const date = new Date(db.list[i].dt * 1000)
    console.log(date.toUTCString())
  }

  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar />
        <div className="WeatherTiles">
          <WeatherTileMain id="weatherTile_0" tileWeather={0}/>
          <WeatherTile id="weatherTile_1" tileWeather={1}/>
          <WeatherTile id="weatherTile_2" tileWeather={1}/>
          <WeatherTile id="weatherTile_3" tileWeather={2}/>
          <WeatherTile id="weatherTile_4" tileWeather={2}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
