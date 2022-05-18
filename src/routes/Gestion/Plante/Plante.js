import GenericTh from "../../../component/Table/GenericTh";
import PlanteForm from "../../../component/Form/Plante";
import GenericRow from "../../../component/Row/GenericRow";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Plante() {


    const url = "plantes";
    const [planteData, setPlanteData] = useState([
        {
            id: "",
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

    const handleSorting = (sortField, sortOrder) => {

        if (sortField) {
            const sorted = [...planteData].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setPlanteData(sorted);
        }
    };


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
                        <GenericTh handleSorting={handleSorting}  value="id" name="Id"/>
                        <GenericTh handleSorting={handleSorting} value="name" name="Nom" />
                        <GenericTh handleSorting={handleSorting} value="price" name="Price" />
                        <GenericTh handleSorting={handleSorting} value ="stock" name="Stock" />
                        <GenericTh name="Actions" isSortable={false} />
                        </tr>
                    </thead>
                    <tbody>
                        {createPlanteList()}

                    </tbody>
                </table>


            }
            <PlanteForm setSubmitted={setSubmitted} />


        </div >

    );
}