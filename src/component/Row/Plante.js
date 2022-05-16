import { Link } from "react-router-dom";
import axios from 'axios';
export default function Plante({ plante, setSubmitted }) {

    const handleClick = async (e) => {

        try {
            if (e.target.name === "update") {

                await axios.get("plantes/" + plante.id);

            }
            if (e.target.name === "delete") {
                await axios.delete("/plantes/" + plante.id);

            }
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }

    }

    return (

        <>
            <tr key={plante.id}>
                <td>

                    {plante.id}
                </td>

                <td>
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/plantes/${plante.id}`}
                    >
                        {plante.name}
                    </Link>
                </td>
                <td>
                    {plante.price}
                </td>

                <td>
                    {plante.stock}
                </td>

                <td>
                    <button name='delete' onClick={handleClick} type="button"> Delete</button>
                    <button name='update' onClick={handleClick} type="button"> Update</button>
                </td>

            </tr>
        </>
    )

}