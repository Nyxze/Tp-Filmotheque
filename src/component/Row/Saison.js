import axios from 'axios';
import React, { useState } from 'react';

export default function Saison({ season, setSubmitted }) {


    const [seasonInput, setSeasonInput] = useState(season.name);


    const handleClick = async (e) => {

        try {
            if (e.target.name === "update") {
                season.name = seasonInput;
                console.log(season);

                await axios.put("/saisons/" + season.id, season);

            }
            if (e.target.name === "delete") {

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
                    <input onChange={(e) => setSeasonInput(e.target.value)} value={seasonInput} />

                </td>
                <td>
                    <button name='delete' onClick={handleClick} type="button"> Delete</button>
                    <button name='update' onClick={handleClick} type="button"> Update</button>
                </td>

            </tr>
        </>
    )

}