import axios from 'axios';
import React, { useState } from 'react';

export default function Saison({ season, setSubmitted }) {


    const [seasonInput, setSeasonInput ] = useState(season.name);


    const handleClick = async (e) => {
        console.log(season);
        try {
            if (e.target.name === "update") {
                let newSeason = season;
                console.log(newSeason);
                await axios.put("/saisons/" + season.id,newSeason);

            }
            if (e.target.name === "delete") {
                console.log("test");
                await axios.delete("/saisons/" + season.id);

            }
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }

    }

    return (

        <>
            <tr>
                <td>
                    {season.id}

                </td>
                <td>
                    <input onChange={(e)=>setSeasonInput(e.target.value)} value={seasonInput}/>

                </td>
                <td>
                    <button name='delete' onClick={handleClick} type="button"> Delete</button>
                    <button name='update' onClick={handleClick} type="button"> Update</button>
                </td>

            </tr>
        </>
    )

}