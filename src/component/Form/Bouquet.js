import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInput from '../Input/FormInput';
import SeasonSelect from '../Select/SeasonSelect';
import StyleSelect from '../Select/StyleSelect';
import axios from 'axios';

export default function BouquetForm({ setSubmitted }) {
    const url = "bouquets";
    const [bouquetFormData, setBouquetFormData] = useState({});
    const [seasonSelect, setSeasonSelect] = useState({
    });
    const [styleSelect, setStyleSelect] = useState({

    });



    function handleChange(event) {
        const { name, value } = event.target;
        setBouquetFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }

        })


    }

    const isValid = () => {
        console.log(seasonSelect.id)
        return (seasonSelect.id && styleSelect.id) && (seasonSelect.id !== "0" && styleSelect.id !== "0")
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        let bouquet = bouquetFormData;
        bouquet.season = seasonSelect;
        bouquet.style = styleSelect;
        try {
            await axios.post(url, bouquet);
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }


    }


    return (
        <Form onSubmit={handleSubmit} className='form-row'>
            <Form.Group>
                <FormInput onChange={handleChange} name="name" type="text" title="Nom"></FormInput>
                <FormInput onChange={handleChange} name="price" type="number" title="Prix"></FormInput>
                <FormInput onChange={handleChange} name="stock" type="number" title="Quantité"></FormInput>
                <FormInput onChange={handleChange} name="infos" type="textarea" title="Informations"></FormInput>
                <FormInput onChange={handleChange} name="urlImg" type="text" title="Url de l'image"></FormInput>
                <FormInput onChange={handleChange} name="color" type="text" title="Couleur"></FormInput>
                <SeasonSelect seasonSelect={seasonSelect} setSeasonSelect={setSeasonSelect}></SeasonSelect>
                <StyleSelect styleSelect={styleSelect} setStyleSelect={setStyleSelect}></StyleSelect>
                <Button disabled={(isValid() ? false : true)} type="submit">
                    Ajouter
                </Button>

            </Form.Group>
        </Form>

    );
}

