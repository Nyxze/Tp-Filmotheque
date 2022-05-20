import axios from 'axios';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';

export default function SeasonSelect({ seasonSelect, setSeasonSelect }) {

  
    const [seasonData, setSeasonData] = useState([]);

    const getSeason = async () => {

        try {
            const { data } = await axios.get('saisons');
            setSeasonData(data);
        } catch (err) {
            console.log(err)
        }
    }

    const seasonOption = () => {

        return (
            seasonData.map(season => <option value={season.id} key={season.name}>{season.name}</option>)
        )
    }

    useEffect(() => {
        getSeason();
    }, []);

    return (

        <>
            <div className='m-2 col-8 d-inline-flex align-items-center'>
                <Form.Label className='m-2' >Saison</Form.Label>
                <Form.Select disabled={(seasonData.length ? false : true)} onChange={(e) => setSeasonSelect({
                    id: e.target.value
                }
                )} name="season">
                    {seasonSelect ?
                        <option value={0}>--Select a season--</option> :
                        ""
                    }
                    {seasonData.length ?
                        seasonOption()
                        :
                        <option>--Pas de saison disponible--</option>
                    }
                    

                </Form.Select>
            </div>


        </>
    )

}