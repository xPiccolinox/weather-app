import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import WeatherTile from './WeatherTile/WeatherTile';
import SearchBar from './SearchBar/SearchBar';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar />
        <div className="WeatherTiles">
          <WeatherTile id={1}/>
          <WeatherTile id={2}/>
          <WeatherTile id={3}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
