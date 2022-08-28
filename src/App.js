import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './Menu/Menu';

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
        <div className="weatherMenu">

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
