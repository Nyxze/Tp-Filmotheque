import GenericForm from "../../component/Form/GenericForm";
import FleurComnponent from "../../component/Row/Fleur";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Plante() {

    const [fleurData, setFleurData] = useState([]);
    const [isSubmitted, setSubmitted] = useState(false);

    const getFleurData = async () => {
        const { data } = await axios.get('fleurs');
        console.log(data);
        setFleurData(data);

    }


    const createFleurList = () => {

        return fleurData.map((fleur) => {
            console.log(fleur);

            return <FleurComnponent setSubmitted={setSubmitted} key={fleur.id} fleur={fleur}></FleurComnponent>
        })
    }
    useEffect(() => {
        getFleurData();
        setSubmitted(false);

    }, [isSubmitted]);

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Tarif</th>
                        <th>Quantité</th>
                        <th>
                            Actions
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {createFleurList()}

                </tbody>
            </table>

            <GenericForm item ={fleurData} setSubmitted={setSubmitted} urlName="plantes" />
        </div>
    );
}