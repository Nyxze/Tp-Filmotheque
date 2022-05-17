import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import FormInput from "../../component/Input/FormInput";

export default function PlanteUpdate() {

    let url = 'plantes'
    let params = useParams()


    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        stock: "",
        infos: "",
        urlImg: "",
    });

    const getData = async () => {
        try {
            let { data } = await axios.get(url+ '/' + params.id)
            setFormData(data);
        } catch (err) {
            console.log(err);
        }
    }



    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }

        })


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.put(url + "/" + params.id, formData);
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getData()
    }, []);


    return (


        <div>
            <Form  onSubmit={handleSubmit} className='form-row'>
                <Form.Group>
                    <FormInput value={formData.name} onChange={handleChange} name="name" type="text" title="Nom"></FormInput>
                    <FormInput value={formData.price} onChange={handleChange} name="price" type="number" title="Prix"></FormInput>
                    <FormInput value={formData.stock} onChange={handleChange} name="stock" type="number" title="Quantité"></FormInput>
                    <FormInput value={formData.infos} onChange={handleChange} name="infos" type="textarea" title="Informations"></FormInput>
                    <FormInput value={formData.urlImg} onChange={handleChange} name="urlImg" type="text" title="Url de l'image"></FormInput>

                    <Button type="submit">
                        Modifier
                    </Button>

                </Form.Group>
            </Form>
        </div>)

}