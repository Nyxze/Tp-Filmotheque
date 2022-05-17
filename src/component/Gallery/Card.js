import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
export default function CardTemplate({ item }) {

    console.log(item)
    return (


        <Card style={{ width: '15%' }}>
            <Card.Img variant="top" src="../flower.jpg" />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.infos}
                </Card.Text>
                <Button className="m-2" variant="primary">Add to cart</Button>
                <Link to={`${item.id}`}>
                    <Button variant="primary">Infos</Button>
                </Link>

            </Card.Body>
        </Card>
    )
}