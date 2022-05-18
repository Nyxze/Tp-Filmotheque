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


                <td className="d-flex">

                    <img alt="" style={{

                        width: "10%",
                        height: "10%",
                    }} src={item.product.urlImg} />
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`${item.id}`}
                    >
                        {item.product.name}
                    </Link>
                </td>


                <td>
                    {item.product.price}
                </td>
                <td>
                    {item.quantity}
                </td>
                <td>
                    {item.linePrice}
                </td>



                <td>
                    <button name='delete' onClick={handleDelete} type="button"> Delete</button>

                </td>


            </tr>
        </>
    )

}