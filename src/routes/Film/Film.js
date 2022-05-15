import { useParams } from "react-router-dom";
import FilmForm from "./Add-film";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Film() {

    let params = useParams();
    const [film, setFilm] = useState({});

    let URL_API = "http://localhost:8080/Tp-filmotheque-0.0.1-SNAPSHOT/api/film"
    const getFilm = async () => {

        try {

            let res = await axios.get(URL_API + params.filmId)
            setFilm(res);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getFilm()
    }, [])

    return (
        <div>
            <h2>Film :{params.filmId}</h2>
            <FilmForm film={film} disable={true}></FilmForm>
        </div>
    );
}