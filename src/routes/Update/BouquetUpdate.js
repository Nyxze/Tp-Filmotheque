import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import FormInput from "../../component/Input/FormInput";

export default function BouquetUpdate() {

    let url = 'bouquets'
    let params = useParams()
    const [seasonData, setSeasonData] = useState([]);
    const [seasonSelect, setSeasonSelect] = useState({
        id: ""
    });
    const [styleData, setStyleData] = useState([]);
    const [styleSelect, setStyleSelect] = useState({
        id:""
    });


    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        stock: "",
        infos: "",
        urlImg: "",
        color: "",
    });

    const getData = async () => {
        try {
            let { data } = await axios.get('bouquets/' + params.id)
            setFormData(data);
            setSeasonSelect(data.season)
            setStyleSelect(data.style)
            console.log(data);
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
        let bouquet = formData;
        bouquet.season = seasonSelect;
        bouquet.style = styleSelect;
        try {
            axios.put(url + "/" + params.id, formData);
        } catch (err) {
            console.log(err)
        }
    }
    function handleSeasonChange(e) {
        console.log(e.target.value)
        setSeasonSelect({
            id: e.target.value,
            name: e.target.name
        })

        console.log(seasonSelect)


    }
    function handleStyleChange(e) {
        setStyleSelect({
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
    const getStyle = async () => {

        try {
            const { data } = await axios.get('styles');
            console.log(data)
            setStyleData(data);
        } catch (err) {
            console.log(err)
        }
    }
    const seasonOption = () => {

        return seasonData.map(season => <option value={season.id} key={season.name}>{season.name}</option>)
    }
    const styleOption = () => {

        return styleData.map(style => <option value={style.id} key={style.libelle}>{style.libelle}</option>)
    }




    useEffect(() => {
        getData()
        getSeason()
        getStyle()
    }, []);


    return (


        <div>
            <Form onSubmit={handleSubmit} className='form-row'>
                <Form.Group>
                    <FormInput value={formData.name} onChange={handleChange} name="name" type="text" title="Nom"></FormInput>
                    <FormInput value={formData.price} onChange={handleChange} name="price" type="number" title="Prix"></FormInput>
                    <FormInput value={formData.stock} onChange={handleChange} name="stock" type="number" title="Quantité"></FormInput>
                    <FormInput value={formData.infos} onChange={handleChange} name="infos" type="textarea" title="Informations"></FormInput>
                    <FormInput value={formData.urlImg} onChange={handleChange} name="urlImg" type="text" title="Url de l'image"></FormInput>
                    <FormInput value={formData.color} onChange={handleChange} name="color" type="text" title="Couleur"></FormInput>

                    <div className='m-2 col-8 d-inline-flex align-items-center'>
                        <Form.Label className='m-2' >Saison</Form.Label>
                        <Form.Select onChange={handleSeasonChange} value={seasonSelect.id} name="season" aria-label="Default select example">
                            <option>Default value</option>
                            {seasonOption()}
                        </Form.Select>
                    </div>
                    <div className='m-2 col-8 d-inline-flex align-items-center'>
                        <Form.Label className='m-2' >Style</Form.Label>
                        <Form.Select value={styleSelect.id} onChange={handleStyleChange} name="style" aria-label="Default select example">
                            <option>Default value</option>
                            {styleOption()}
                        </Form.Select>
                    </div>


                    <Button type="submit">
                        Modifier
                    </Button>

                </Form.Group>
            </Form>
        </div>)

}