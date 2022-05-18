
import GenericRow from "../../../component/Row/GenericRow";
import GenericTh from "../../../component/Table/GenericTh";
import axios from "axios";
import { useEffect, useState } from "react";
import BouquetForm from "../../../component/Form/Bouquet";

export default function Bouquet() {

    const url = "bouquets";

    const [bouquetData, setBouquetData] = useState([
        {
            id: "",
            name: "",
            price: "",
            stock: "",
            infos: "",
            urlImg: "",
            season: "",
            color: "",
            style: ""
        }
    ]);

 
    const [isEmpty, setIsEmpty] = useState(true);

    const [isSubmitted, setSubmitted] = useState(false);


    const sortBy = ()=> {
        console.log(bouquetData);
    }

    const getPlanteData = async () => {

        try {
            const { data } = await axios.get(url);
            if (data.length > 0) {
                setIsEmpty(false);
                setBouquetData(data);
            } else {
                setIsEmpty(true)

            }
        } catch (err) {
            setIsEmpty(true)
            console.log(err)
        }


    }


    const createBouquetList = () => {
        return bouquetData.map((bouquet) => {
            return <GenericRow setSubmitted={setSubmitted} key={bouquet.id} item={bouquet} url={url}></GenericRow>
        })



    }

    useEffect(() => {
        getPlanteData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);

    return (


        <div>
            {isEmpty ? "Aucune bouquets" :

                <table className='table'>
                    <thead>
                        <tr>
                        <GenericTh onClick={sortBy} name="Id"/>
                        <GenericTh name="Nom"/>
                        <GenericTh name="Tarifs"/>
                        <GenericTh name="Quantité"/>
                        <GenericTh name="Saison"/>
                        <GenericTh name="Style"/>

                        <GenericTh name="Actions" isSortable={false}/>


                        </tr>
                    </thead>
                    <tbody>
                        {createBouquetList()}

                    </tbody>
                </table>


            }
            <BouquetForm setSubmitted={setSubmitted} />


        </div>

    );
}