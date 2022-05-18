import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
export default function CardTemplate({ item }) {


    const [quantity,setQuantity] = useState(1);

    const handleChange = (e) =>{

        setQuantity(e.target.value)
    }
    const handleClick = async (e) => {

        let cartItem = {
            id: e.target.value,
            quantity: quantity
        }
        try {
            axios.post('/cart/', cartItem)

        } catch (err) {
            console.log(err)
        }

        console.log(e.target.value)

    }
    console.log(item)
    return (


        <Card style={{ width: '15%' }}>
            <Card.Img variant="top" src={item.urlImg} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.infos}
                </Card.Text>
                <label>
                    Quantity
                </label>
              <input onChange={handleChange} placeholder ="1" min="1" type="number"/>
                <Button
                    value={item.id} onClick={handleClick} className="m-2" variant="primary">Add to cart</Button>
                <Link to={`${item.id}`}>
                    <Button variant="primary">Infos</Button>
                </Link>

            </Card.Body>
        </Card>
    )
}