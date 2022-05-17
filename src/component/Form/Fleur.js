import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInput from '../Input/FormInput';
import axios from 'axios';

export default function FleurForm({ setSubmitted }) {

    const url = "fleurs";

    const [fleurFormData, setFleurFormData] = useState([]);
    const [seasonData, setSeasonData] = useState([] );
    const [seasonSelect, setSeasonSelect] = useState({});

    function handleChange(event) {
        console.log(event);
        const { name, value } = event.target;
        setFleurFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    function handleSeasonChange(e) {
        setSeasonSelect({
            id: e.target.value
        })


    }



    const getSeason = async () => {

        try {
            const { data } = await axios.get('saisons');
            setSeasonData(data);
        } catch (err) {
            console.log(err)
        }
    }
    const seasonOption = () => {

        return seasonData.map(season => <option value={season.id} key={season.name}>{season.name}</option>)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let fleur = fleurFormData;
        fleur.season = seasonSelect;
        console.log(fleur);
        try {
            await axios.post(url, fleur);
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }


    }

    useEffect(() => {
        getSeason();
    }, []);

    return (
        <Form onSubmit={handleSubmit} className='form-row'>
            <Form.Group>
                <FormInput onChange={handleChange} name="name" type="text" title="Nom"></FormInput>
                <FormInput onChange={handleChange} name="price" type="number" title="Prix"></FormInput>
                <FormInput onChange={handleChange} name="stock" type="number" title="Quantité"></FormInput>
                <FormInput onChange={handleChange} name="infos" type="textarea" title="Informations"></FormInput>
                <FormInput onChange={handleChange} name="urlImg" type="text" title="Url de l'image"></FormInput>
                <FormInput onChange={handleChange} name="color" type="text" title="Couleur"></FormInput>


                <div className='m-2 col-8 d-inline-flex align-items-center'>
                    <Form.Label className='m-2' >Saison</Form.Label>
                    <Form.Select onChange={handleSeasonChange} name="season" aria-label="Default select example">
                        <option>Default value</option>
                        {seasonOption()}
                    </Form.Select>
                </div>
                <Button type="submit">
                    Ajouter
                </Button>

            </Form.Group>
        </Form>

    );
}

