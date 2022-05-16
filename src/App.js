import { Routes, Route } from "react-router-dom";
import './App.css';
import axios from "axios";
import Home from './routes/Home';
import Style from './routes/Style/Style';
import Saison from "./routes/Saison/Saison";
import Plante from "./routes/Plante/Plante";
import Bouquet from "./routes/Bouquet/Bouquet";
import Fleur from "./component/Row/Fleur";

function App() {
  axios.defaults.baseURL = "http://localhost:8080/Tp-fleuriste/api/";


  return (
    <div className="App container-fluid">

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/styles" element={<Style />} />
        <Route path="gestion"  >
          <Route path="plantes" element={<Plante />} />
          <Route path="fleurs" element={<Fleur />} />
          <Route path="bouquets" element={<Bouquet />} />
          <Route path="saisons" element={<Saison />} />
          <Route path="styles" element={<Style />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
