import { Routes, Route } from "react-router-dom";
import './App.css';
import axios from "axios";
import Home from './routes/Home';
import Cart from "./routes/Cart/Cart"
import CartInfo from "./routes/Cart/CartInfo"
import Style from './routes/Gestion/Style/Style';
import Saison from "./routes/Gestion/Saison/Saison";
import PlanteInfo from "./routes/Plantes/PlanteInfo";
import PlanteUpdate from "./routes/Update/PlanteUpdate";
import PlanteGallery from "./routes/Plantes/List"
import BouquetInfo from "./routes/Bouquets/BouquetInfo"
import BouquetUpdate from "./routes/Update/BouquetUpdate";
import BouquetGallery from "./routes/Bouquets/List"
import FleurInfo from "./routes/Fleurs/FleurInfo";
import FleurUpdate from "./routes/Update/FleurUpdate";
import FleurGallery from "./routes/Fleurs/List"
import GestionPlante from "./routes/Gestion/Plante/Plante";
import GestionBouquet from "./routes/Gestion/Bouquet/Bouquet";
import GestionFleur from "./routes/Gestion/Fleur/Fleur";

function App() {
  axios.defaults.baseURL = "http://localhost:8080/Tp-fleuriste/api/";


  return (
    <div className="App container-fluid">

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<CartInfo />} />
        <Route path="/fleurs/:id" element={<FleurInfo />} />
        <Route path="/fleurs" element={<FleurGallery />} />
        <Route path="/bouquets/:id" element={<BouquetInfo />} />
        <Route path="/bouquets" element={<BouquetGallery />} />
        <Route path="/plantes/:id" element={<PlanteInfo />} />
        <Route path="/plantes" element={<PlanteGallery />} />

        <Route path="gestion"  >
          <Route path="plantes" element={<GestionPlante />} >
          </Route>
          <Route path="fleurs" element={<GestionFleur />} >

          </Route>
          <Route path="bouquets" element={<GestionBouquet />} >

          </Route>
          <Route path="saisons" element={<Saison />} />
          <Route path="styles" element={<Style />} />
        </Route>

        <Route path="update">
          <Route path="plantes/:id" element={<PlanteUpdate />} >
          </Route>
          <Route path="fleurs/:id" element={<FleurUpdate />} >

          </Route>
          <Route path="bouquets/:id" element={<BouquetUpdate />} >

          </Route>

        </Route>
      </Routes>

    </div >
  );
}

export default App;
