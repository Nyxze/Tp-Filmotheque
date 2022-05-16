import { Link } from "react-router-dom";
import axios from 'axios';
export default function Fleur({ fleur,setSubmitted }) {


  
    const handleClick = async (e) => {

        try {
            if (e.target.name === "update") {

                let res = await axios.get("fleurs/" + fleur.id);

            }
            if (e.target.name === "delete") {
                await axios.delete("/fleurs/" + fleur.id);

            }
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }

    }

    return (

        <>
         <tr>
                <td>

                    {fleur.id}
                </td>

                <td>
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/plantes/${fleur.id}`}
                        key={fleur.id}
                    >
                        {fleur.name}
                    </Link>
                </td>
                <td>
                    {fleur.price}
                </td>

                <td>
                    {fleur.stock}
                </td>

                <td>
                    <button name='delete' onClick={handleClick} type="button"> Delete</button>
                    <button name='update' onClick={handleClick} type="button"> Update</button>
                </td>

            </tr>
      
        </>
    )

}