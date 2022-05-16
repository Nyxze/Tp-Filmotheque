import React, { useState } from 'react';
import axios from 'axios';

export default function AddStyle({ setSubmitted }) {
    const [style, setStyle] = useState({});
    
    const handleClick = async () => {
        try {
            await axios.post('styles', style)
            setSubmitted(true);

        } catch (err) {
        }

    }


    function handleInputChange(event) {

        const { name, value } = event.target;
        setStyle(prevFormData => {

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
                    <input onChange={handleInputChange} id="libelleStyle" name="libelle" placeholder="Libellé du style ..." required
                        className="form-control" />
                </div>
                <div className="col-xs-2">
                    <button onClick={handleClick} type="button" id="bAjoutStyle" className="btn btn-primary pull-right">Envoyer</button>
                </div>
            </div>

        </form>
    </div>)

}