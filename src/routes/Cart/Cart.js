
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

    const totalPrice = () => {

        let res = cartItemData.reduce((acc, obj) => {
            return acc + obj.linePrice
        }, 0)

        return " " +  res
    }

    const getCartData = async () => {

        try {
            const { data } = await axios.get(url);
            if (data.length > 0) {
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


    const createCartItemList = () => {
        return cartItemData.map((cartItem) => {
            return <CartRow setSubmitted={setSubmitted} key={cartItem.id} item={cartItem} url={url}  ></CartRow>
        })



    }

    useEffect(() => {
        getCartData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);

    return (


        <>
            {isEmpty ? "Panier vide" :
                <div>


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
                            {createCartItemList()}
                        </tbody>

                    </table>

                    <div className="d-flex justify-content-end col-10">
                    Total:{totalPrice()}
                    </div>
                </div>



            }



        </>

    );
}