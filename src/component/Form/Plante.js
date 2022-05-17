import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInput from '../Input/FormInput';
import axios from 'axios';

export default function GenericForm({ setSubmitted }) {

    const [itemFormData, setItemFormData] = useState([]);


    function handleChange(event) {
        console.log(event);
        const { name, value } = event.target;
        setItemFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }






    const handleSubmit = async (e) => {
        e.preventDefault()
        let item = itemFormData;
        console.log(item);
        try {
            await axios.post("plantes", item);
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }


    }


    return (
        <Form onSubmit={handleSubmit} className='form-row'>
            <Form.Group>
            <FormInput onChange={handleChange} name="name" type="text" title="Nom"></FormInput>
            <FormInput onChange={handleChange}  name="price" type="number" title="Prix"></FormInput>
            <FormInput onChange={handleChange}  name="stock" type="number" title="Quantité"></FormInput>
            <FormInput onChange={handleChange}  name="infos" type="textarea" title="Informations"></FormInput>
            <FormInput onChange={handleChange}  name="urlImg" type="text" title="Url de l'image"></FormInput>
                      <Button type="submit">
                    Ajouter
                </Button>

            </Form.Group>
        </Form>

    );
}

