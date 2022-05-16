import React, { useState, useEffect } from 'react';
import SaisonComponent from '../../component/Row/Saison';
import axios from 'axios';
import AddSaison from '../../component/Input/AddSaison';
export default function Saison() {

    const [seasonData, setseasonData] = useState([]);
    const [isSubmitted, setSubmitted] = useState(false);
    const [isEmpty, setIsEmpty] = useState();


    const getStylesData = async () => {
        const { data } = await axios.get('saisons');
        if (data.length > 0) {
            setseasonData(data);
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }

    }

    useEffect(() => {
        getStylesData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);


    const createSaisonList = () => {

        return seasonData.map((season) => {

            return <SaisonComponent setSubmitted={setSubmitted} key={season.id} season={season}></SaisonComponent>
        })
    }


    return (
        <div >
            <h2> Liste des saisons </h2>
            {isEmpty ? "Aucune saisons" :
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Libelé</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {createSaisonList()}

                </tbody>
            </table>
            }
            <AddSaison setSubmitted={setSubmitted} />
        </div>
    )

}