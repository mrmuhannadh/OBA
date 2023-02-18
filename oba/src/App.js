import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Index from './Pages';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale = 0.86, maximum-scale=3.0, minimum-scale=0.86"></meta>
      
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
