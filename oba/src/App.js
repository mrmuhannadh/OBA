import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/inter"
import "@fontsource/dm-serif-display"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import Transision from './Components/Transition/Transision';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale = 0.86, maximum-scale=3.0, minimum-scale=0.86"></meta>

      <Router>
        <Transision />
      </Router>


    </div>
  );
}

export default App;
