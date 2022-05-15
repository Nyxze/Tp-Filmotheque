import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function FilmForm({film,disable}) {


    let URL_API_STYLE = "http://localhost:8080/Tp-filmotheque-0.0.1-SNAPSHOT/api/style";
    let URL_API_FILM = "http://localhost:8080/Tp-filmotheque-0.0.1-SNAPSHOT/api/film";
    const [formData, setFormData] = useState({
        titre: "",
        year: "",
        style: "",
        vue: false,
        realisateur: {}

    });
    const [stylesData, setStylesData] = useState([]);
    const [realisateur, setRealisateur] = useState({});



    const getStylesData = async () => {
        const { data } = await axios.get(URL_API_STYLE);
        setStylesData(data);
    }



    function handleChange(event) {

        console.log(event.target.value);
        console.log(event.target.name);
        const { name, value } = event.target;
        setFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleRealisateurChange(event) {

        const { name, value } = event.target;
        setRealisateur(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
        let film = {
            titre: formData.titre,
            year: formData.year,
            style: formData.style,
            vue: formData.vue,
            realisateur: realisateur

        }
        try {
            let res = await axios.post(URL_API_FILM,film);

        } catch (err) {

            console.log(err)
        }
        console.log(film);

    }

    const styleOption = () => {

        return stylesData.map(style => <option value={style.label} key={style.label}>{style.label}</option>)
    }

    useEffect(() => {
        getStylesData();
    }, []);



    return (
        <Form onSubmit={handleSubmit} className='form-row'>
            <Form.Group>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2' >Titre</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        disabled={disable}
                        name='titre'
                        type="text"
                        placeholder="Titre du film..." />
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2' >Année</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        disabled={disable}
                        name="year"
                        type="text"
                        placeholder="Année de sortie" />
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2'>Style</Form.Label>
                    <Form.Select
                        name="style"
                        disabled={disable}
                        onChange={handleChange}>
                        <option defaultValue={true}>---Select a style---</option>
                        {styleOption()}
                    </Form.Select>
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2' >Réalisateur</Form.Label>
                    <Form.Control
                        onChange={handleRealisateurChange}
                        disabled={disable}
                        className="m-2"
                        type="text"
                        name="nom"
                        placeholder="Nom" />

                    <Form.Control
                        onChange={handleRealisateurChange}
                        disabled={disable}
                        name="prenom"
                        type="text"
                        placeholder="Prénom" />
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2' >Vu</Form.Label>
                    <Form.Select  disabled={disable} onChange={handleChange} name='vue'>
                        <option value={true}> Oui</option>
                        <option value={false}> Non</option>
                    </Form.Select>
                </div>

                <Button onClick={()=>disable=true} variant="primary" type="submit">
                    {film? "Modifier" : "Ajouter film"}
                </Button> 
                

            </Form.Group>
        </Form>

    );
}