import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInput from '../Input/FormInput';
import axios from 'axios';

export default function BouquetForm({ setSubmitted }) {
    const url = "bouquets";
    const [bouquetFormData, setBouquetFormData] = useState({});
    const [seasonData, setSeasonData] = useState([]);
    const [seasonSelect, setSeasonSelect] = useState({

    });
    const [styleData, setStyleData] = useState([]);
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
    function handleSeasonChange(e) {
        setSeasonSelect({
            id: e.target.value
        })


    }
    function handleStyleChange(e) {
        setStyleSelect({
            id: e.target.value
        })


    }

    const isValid = () => {
        return (seasonSelect.id && styleSelect.id) && (seasonSelect.id !== "0" && styleSelect.id !== "0")
    }


    const getSeason = async () => {

        try {
            const { data } = await axios.get('saisons');
            setSeasonData(data);
        } catch (err) {
            console.log(err)
        }
    }
    const getStyle = async () => {

        try {
            const { data } = await axios.get('styles');
            setStyleData(data);
        } catch (err) {
            console.log(err)
        }
    }
    const seasonOption = () => {

        return (
            seasonData.map(season => <option value={season.id} key={season.name}>{season.name}</option>)
        )
    }
    const styleOption = () => {

        return styleData.map(style => <option value={style.id} key={style.libelle}>{style.libelle}</option>)
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


    useEffect(() => {
        getSeason();
        getStyle();
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
                    <Form.Select disabled={(seasonData.length ? false : true)} onChange={handleSeasonChange} name="season" aria-label="Default select example">
                        {seasonData.length ?
                            seasonOption()
                            :
                            <option>--Pas de saison disponible--</option>
                        }
                        {seasonSelect ?
                            <option value={0}>--Select a season--</option> :
                            ""
                        }

                    </Form.Select>
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>
                    <Form.Label className='m-2' >Style</Form.Label>
                    <Form.Select disabled={(styleData.length ? false : true)} onChange={handleStyleChange} name="style" aria-label="Default select example">
                        {styleData.length ?
                            styleOption()
                            :
                            <option>--Pas de style disponible--</option>
                        }
                        {styleSelect ?
                            <option value={0}>--Select a style--</option> :
                            ""
                        }


                    </Form.Select>
                </div>

                <Button disabled={(isValid() ? false : true)} type="submit">
                    Ajouter
                </Button>

            </Form.Group>
        </Form>

    );
}

