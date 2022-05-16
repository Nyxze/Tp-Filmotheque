import React, { useState, useEffect } from 'react';
import FilmComponenent from '../../component/Row/Fleur';
import axios from 'axios';
export default function Film() {


    const [fleursData, setFleursData] = useState([]);

    const getFilmsData = async () => {
        const { data } = await axios.get('fleurs');
        setFleursData(data);

    }

    useEffect(() => {
        getFilmsData();
    }, []);


    const createFilmList = () => {

        return fleursData.map((fleurs) => {

            return <FilmComponenent key={fleurs.id} film={fleurs}></FilmComponenent>
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