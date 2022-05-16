import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInput from '../Input/FormInput';
import axios from 'axios';

export default function GenericForm({ item, setSubmitted, urlName }) {

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


    const buildInputName = () => {

        if (item.length > 0) {

            return Object.keys(item[0]).map((name) => {
                if (name !== "id") {

                    if (name === "price" || name === "stock") {

                        return (<FormInput onChange={handleChange} key={name} name={name} type="number"></FormInput>)
                    }

                    if (name === "infos") {
                        return (<FormInput onChange={handleChange} key={name} name={name} type="textarea" ></FormInput>)
                    }

                    return (<FormInput onChange={handleChange} key={name}  name={name} type="text"></FormInput>)
                }
            })
        }
    }





    const handleSubmit = async (e) => {
        e.preventDefault()
        let item = itemFormData;
        console.log(item);
        try {
            await axios.post(urlName, item);
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }


    }


    return (
        <Form onSubmit={handleSubmit} className='form-row'>
            <Form.Group>
                {buildInputName()}
                <Button type="submit">
                    Ajouter
                </Button>

            </Form.Group>
        </Form>

    );
}

