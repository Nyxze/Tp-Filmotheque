import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Style from './routes/Style/Style';
import ListFilm from './routes/Film/List-film';
import FilmForm from './routes/Film/Add-film';
import Film from './routes/Film/Film';

function App() {
  return (
    <div className="App container-fluid">

<Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/style" element={<Style />} />
        <Route path="/list-film" element={<ListFilm/>} />
        <Route path="/add-film" element={<FilmForm />} />
        <Route path="/film/:filmId" element={<Film />} />
        

      </Routes>
  
    </div>
  );
}

export default App;
