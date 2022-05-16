import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function PlanteForm({updatePlante,setSubmitted}) {

    const [planteFormData, setPlanteFormData] = useState({
        name: "",
        price: "",
        stock: "",
        infos: false,
        urlImg: ""

    });


    function handleChange(event) {


        const { name, value } = event.target;
        setPlanteFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        let plante = planteFormData;
        console.log(plante);
        try {
            await axios.post("plantes",plante);
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }


    }


    return (
        <Form onSubmit={handleSubmit} className='form-row'>
            <Form.Group>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2' >Nom</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name='name'
                        type="text"
                        placeholder="Nom de la plante..." />
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>

                    <Form.Label className='m-2' >Tarif</Form.Label>
                    <Form.Control
                        onChange={handleChange}

                        name="price"
                        type="number"
                    />
                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>
                    <Form.Label className='m-2' >Quantité</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="stock"
                        type="number"
                    />

                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>
                    <Form.Label className='m-2' >Infos</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="infos"
                        as="textarea"
                        rows={5}

                    />

                </div>
                <div className='m-2 col-8 d-inline-flex align-items-center'>
                    <Form.Label className='m-2' >Image URL</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="urlImg"
                        type="text"
                    />

                </div>


                <Button type="submit">
                    Ajouter
                </Button>

            </Form.Group>
        </Form>

    );
}