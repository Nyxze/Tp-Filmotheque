import React, { useState, useEffect } from 'react';
import FilmComponenent from '../../component/Film';
import axios from 'axios';
export default function Film() {

    let URL_API = "http://localhost:8080/Tp-filmotheque-0.0.1-SNAPSHOT/api/film";
    const [filmsData, setFilmsData] = useState([]);

    const getFilmsData = async () => {
        const { data } = await axios.get(URL_API);
        setFilmsData(data);

    }

    useEffect(() => {
        getFilmsData();
    }, []);


    const createFilmList = () => {

        return filmsData.map((film) => {

            return <FilmComponenent key={film.id} film={film}></FilmComponenent>
        })
    }


    return (
        <div >
            <table className='table'>
                <thead>
                    <tr>

                        <th>Titre</th>
                        <th>Années</th>
                        <th>Style</th>
                        <th>Réalisateur</th>
                        <th>Durée</th>
                        <th>Vu</th>
                    </tr>
                </thead>
                <tbody>
                    {createFilmList()}

                </tbody>
            </table>
        </div>
    )

}