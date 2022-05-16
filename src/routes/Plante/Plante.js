import { useParams } from "react-router-dom";
import PlanteForm from "../../component/Form/PlanteForm";
import PlanteComponenent from "../../component/Row/Plante";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Plante() {

    const [planteData, setPlanteData] = useState([]);
    const [isSubmitted, setSubmitted] = useState(false);
    const [updatePlante,setUpdatePlante] = useState({});

    const getPlanteData = async () => {
        const { data } = await axios.get('plantes');
        setPlanteData(data);

    }


    const createPlanteList = () => {

        return planteData.map((plante) => {

            return <PlanteComponenent setSubmitted={setSubmitted} key={plante.id} plante={plante}></PlanteComponenent>
        })
    }
    useEffect(() => {
        getPlanteData();
        setSubmitted(false);

    }, [isSubmitted, updatePlante]);

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
                    {createPlanteList()}

                </tbody>
            </table>

            <PlanteForm setUpdatePlante={setUpdatePlante} setSubmitted={setSubmitted} />
        </div>
    );
}