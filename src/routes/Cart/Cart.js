
import CartRow from "../../component/Row/CartRow";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Cart() {

    const url = "cart";

    const [cartItemData, setCartItemData] = useState([
        {
         
        }
    ]);

 
    const [isEmpty, setIsEmpty] = useState(true);

    const [isSubmitted, setSubmitted] = useState(false);

    const getPlanteData = async () => {

        try {
            const { data } = await axios.get(url);
            if (data.length > 0) {
                console.log(data);
                setIsEmpty(false);
                setCartItemData(data);
            } else {
                setIsEmpty(true)

            }
        } catch (err) {
            setIsEmpty(true)
            console.log(err)
        }


    }


    const createBouquetList = () => {
        return cartItemData.map((cartItem) => {
            return <CartRow setSubmitted={setSubmitted} key={cartItem.id} item={cartItem} url={url}  ></CartRow>
        })



    }

    useEffect(() => {
        getPlanteData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);

    return (


        <div>
            {isEmpty ? "Panier Vide" :

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Price u</th>
                            <th>Quantity</th>
                            <th>
                                Total
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {createBouquetList()}

                    </tbody>
                </table>


            }
     


        </div>

    );
}