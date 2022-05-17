import axios from 'axios';
import React, { useState } from 'react';

export default function Style({ style, setSubmitted }) {


    const [libelle, setLibelle] = useState(style.libelle);

    const handleClick = async (e) => {
        try {
            if (e.target.name === "update-style") {
                style.libelle = libelle;
                await axios.put("/styles/" + style.id, style);

            }
            if (e.target.name === "delete-style") {
                await axios.delete("/styles/" + style.id);

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
                    {style.id}

                </td>
                <td>
                    <input onChange={(e) => setLibelle(e.target.value)} value={libelle} />

                </td>
                <td>
                    <button name='delete-style' onClick={handleClick} type="button"> Delete</button>
                    <button name='update-style' onClick={handleClick} type="button"> Update</button>
                </td>

            </tr>
        </>
    )

}