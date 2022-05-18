import FleurForm from "../../../component/Form/Fleur";
import GenericRow from "../../../component/Row/GenericRow";
import GenericTh from "../../../component/Table/GenericTh"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Fleur() {

    const url = "fleurs";

    const [planteData, setPlanteData] = useState([
        {
            id: "",
            name: "",
            price: "",
            stock: "",
            infos: "",
            urlImg: "",
            season: "",
            color: ""
        }
    ]);
    const [isEmpty, setIsEmpty] = useState(true);

    const [isSubmitted, setSubmitted] = useState(false);

    const getPlanteData = async () => {

        try {
            const { data } = await axios.get(url);
            if (data.length > 0) {
                setIsEmpty(false);
                setPlanteData(data);
            } else {
                setIsEmpty(true)

            }
        } catch (err) {
            setIsEmpty(true)
            console.log(err)
        }


    }


    const createFleurList = () => {
        return planteData.map((fleur) => {
            return <GenericRow setSubmitted={setSubmitted} key={fleur.id} item={fleur} url={url}></GenericRow>
        })



    }

    useEffect(() => {
        getPlanteData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);

    return (


        <div>
            {isEmpty ? "Aucune fleurs" :

                <table className='table'>
                    <thead>
                        <tr>
                        <GenericTh name="Id" />
                        <GenericTh name="Nom" />
                        <GenericTh name="Price" />
                        <GenericTh name="Stock" />
                        <GenericTh name="Saison" />
                        <GenericTh name="Action" isSortable={false} />
                            


                        </tr>
                    </thead>
                    <tbody>
                        {createFleurList()}

                    </tbody>
                </table>


            }
<FleurForm setSubmitted={setSubmitted} />


        </div >

    );
}