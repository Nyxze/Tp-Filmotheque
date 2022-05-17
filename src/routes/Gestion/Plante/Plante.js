import PlanteForm from "../../../component/Form/Plante";
import GenericRow from "../../../component/Row/GenericRow";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Plante() {

    const url ="plantes";
    const [planteData, setPlanteData] = useState([
        {
            id:"",
            name: "",
            price: "",
            stock: "",
            infos: "",
            urlImg: ""
        }
    ]);
    const [isEmpty, setIsEmpty] = useState(true);

    const [isSubmitted, setSubmitted] = useState(false);

    const getPlanteData = async () => {

        try{
            const { data } = await axios.get(url);
            if (data.length > 0) {
                setIsEmpty(false);
                setPlanteData(data);
            } else {
                setIsEmpty(true)

            }
        }catch(err){
            setIsEmpty(true)
            console.log(err)
        }


    }


    const createPlanteList = () => {
            return planteData.map((plante) => {
                return <GenericRow setSubmitted={setSubmitted} key={plante.id} item={plante} url={url}></GenericRow>
            })

        

    }

    useEffect(() => {
        getPlanteData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);

    return (


        <div>
            {isEmpty ? "Aucune plantes" :

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
                        {createPlanteList()}

                    </tbody>
                </table>


            }
            <PlanteForm setSubmitted={setSubmitted} />


        </div>

    );
}