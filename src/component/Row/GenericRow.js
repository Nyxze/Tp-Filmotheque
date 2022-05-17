import { Link } from "react-router-dom";
import axios from 'axios';
export default function GenericRow({ item, setSubmitted, url }) {

    const handleDelete = async (e) => {

        try {

            await axios.delete(`${url}/${item.id}`)
            setSubmitted(true);

        } catch (err) {

            console.log(err)
        }

    }
    

    return (

        <>
            <tr key={item.id}>
                <td>

                    {item.id}
                </td>

                <td>
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`${url}/${item.id}`}
                    >
                        {item.name}
                    </Link>
                </td>
                <td>
                    {item.price}
                </td>

                <td>
                    {item.stock}
                </td>

                {item.season
                    ? <td>
                        {item.season.name}
                    </td>
                    : ""
                }

                {item.style
                    ? <td>
                        {item.style.libelle}
                    </td>
                    : ""
                }



                <td>
                    <button name='delete' onClick={handleDelete} type="button"> Delete</button>
                    <Link to= {`/update/${url}/${item.id}`}>
                    <button name='update' type="button"> Update</button>
                    </Link>
                
               
        
                </td>


            </tr>
        </>
    )

}