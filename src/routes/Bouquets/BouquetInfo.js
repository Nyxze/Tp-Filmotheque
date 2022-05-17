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
                <Card.Img style={{ width: '15rem' }} variant="top" src={bouquetData.urlImg}></Card.Img>
                <Card.Title>{bouquetData.name}</Card.Title>
                <Card.Text>
                   Infos: {bouquetData.infos   }
                </Card.Text>
                <Card.Text>
                   Prix: {bouquetData.price   }
                </Card.Text>
                <Card.Text>
                   Couleur dominante: {bouquetData.color   }
                </Card.Text>
                <Card.Text>
                  Saison: {bouquetData.season?.name   }
                </Card.Text>
                <Card.Text>
                  Style: {bouquetData.style?.libelle   }
                </Card.Text>
                <Form.Select name="quantity" aria-label="Default select example">
                    <option>Default value</option>

                </Form.Select>
                <Button className="mt-2" variant="primary">Ajouter au pannier</Button>
            </Card.Body>
        </Card>

    )
}