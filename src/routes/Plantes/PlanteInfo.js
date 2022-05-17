import axios from "axios";
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function Bouquet() {

    let url = 'bouquets'
    let params = useParams();
    const [bouquetData, setBouquetData] = useState([]);

    const getBouquet = async () => {
        try {
            let { data } = await axios.get(url + '/' + params.id)
            setBouquetData(data);
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
                <Card.Img style={{ width: '15rem' }} variant="top" src="../flower.jpg"></Card.Img>
                <Card.Title>{bouquetData.name}</Card.Title>
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