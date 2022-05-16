import GenericForm from "../../component/Form/GenericForm";
import PlanteComponenent from "../../component/Row/Plante";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Plante() {

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
    const [isEmpty, setIsEmpty] = useState();

    const [isSubmitted, setSubmitted] = useState(false);

    const getPlanteData = async () => {
        const { data } = await axios.get('plantes');

        if (data.length > 0) {
            setIsEmpty(false);
            setPlanteData(data);
        } else {
            setIsEmpty(true)
        }

    }


    const createPlanteList = () => {
            return planteData.map((plante) => {
                return <PlanteComponenent setSubmitted={setSubmitted} key={plante.id} plante={plante}></PlanteComponenent>
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
            <GenericForm item={planteData} setSubmitted={setSubmitted} urlName="plantes" />


        </div>

    );
}