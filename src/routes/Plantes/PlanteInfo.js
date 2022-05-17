import axios from "axios";
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function Bouquet() {

    let url = 'plantes'
    let params = useParams();
    const [planteData, setPlanteData] = useState([]);

    const getBouquet = async () => {
        try {
            let { data } = await axios.get(url + '/' + params.id)
            setPlanteData(data);
            console.log(data);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBouquet()
    }, [])
    return (

        <Card className="align-items-center" style={{ width: '60%' }}>
            <Card.Body>
                <Card.Img style={{ width: '15rem' }} variant="top" src={planteData.urlImg}></Card.Img>
                <Card.Title>{planteData.name}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Form.Select name="quantity" aria-label="Default select example">
                    <option>Default value</option>

                </Form.Select>
                <Button className="mt-2" variant="primary">Ajouter au pannier</Button>
            </Card.Body>
        </Card>

    )
}