import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Menu from './Menu/Menu';
// import WeatherMenu from './WeatherMenu/WeatherMenu';
import WeatherTile from './WeatherTile/WeatherTile';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <div className="SearchBar">

        </div>
        <div className="WeatherTiles">
          <WeatherTile />
          <WeatherTile />
          <WeatherTile />
        </div>
        {/* <div className="searchBar">

        </div> */}
        {/* <Menu /> */}
        {/* <WeatherMenu /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
