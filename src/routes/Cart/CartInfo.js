import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FormInput from "../../component/Input/FormInput";


export default function CartItemInfos() {

    let url = 'cart'
    let params = useParams();
    const [cartItemInfos, setCartItemInfos] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const getBouquet = async () => {
        try {
            let { data } = await axios.get(url + '/' + params.id)
            setCartItemInfos(data);
            setQuantity(data.quantity)
            console.log(data);

        } catch (err) {
            console.log(err)
        }
    }
    const handleChange = (e) => {
      setQuantity(e.target.value)
    }

    useEffect(() => {
        getBouquet()
    }, [])
    return (

        <Card className="align-items-center" style={{ width: '60%' }}>
            <Card.Body>
                <Card.Img style={{ width: '15rem' }} variant="top" src={cartItemInfos.urlImg}></Card.Img>
                <Card.Title>{cartItemInfos.product?.name}</Card.Title>
                <Card.Text>
                    Infos: {cartItemInfos.product?.infos}
                </Card.Text>
                <Card.Text>
                    Prix: {cartItemInfos.product?.price}
                </Card.Text>

                {cartItemInfos.season
                    ?
                    <Card.Text>
                        Saison: {cartItemInfos.season.name}
                    </Card.Text> :
                    ""

                }

                {cartItemInfos.style
                    ?
                    <Card.Text>
                        Style: {cartItemInfos.style.name}
                    </Card.Text> :
                    ""

                }

                <FormInput title="Quantity"  type="number" onChange={handleChange} value={quantity}>
                  
                </FormInput>

                <Button className="mt-2" variant="primary">Ajouter au pannier</Button>
            </Card.Body>
        </Card>

    )
}