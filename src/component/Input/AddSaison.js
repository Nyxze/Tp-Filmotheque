import React, { useState } from 'react';
import axios from 'axios';

export default function AddSaison({ setSubmitted }) {
    const [season, setSeason] = useState({});
    
    const handleClick = async () => {
        try {
            console.log(season)
             await axios.post('saisons', season)
            setSubmitted(true);

        } catch (err) {
        }

    }


    function handleInputChange(event) {

        const { name, value } = event.target;
        setSeason(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (<div className="container">
        <form className="form-horizontal" >
            <div className="form-group">
                <div className="col-xs-10">
                    <input onChange={handleInputChange} id="libelleStyle" name="name" placeholder="Nom de la saison ..." required
                        className="form-control" />
                </div>
                <div className="col-xs-2">
                    <button onClick={handleClick} type="button" id="bAjoutStyle" className="btn btn-primary pull-right">Envoyer</button>
                </div>
            </div>

        </form>
    </div>)

}