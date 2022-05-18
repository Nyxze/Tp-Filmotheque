import FleurForm from "../../../component/Form/Fleur";
import GenericRow from "../../../component/Row/GenericRow";
import GenericTh from "../../../component/Table/GenericTh"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Fleur() {

    const url = "fleurs";

    const [fleurData, setFleurData] = useState([
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

    const getfleurData = async () => {

        try {
            const { data } = await axios.get(url);
            if (data.length > 0) {
                setIsEmpty(false);
                setFleurData(data);
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
            const sorted = [...fleurData].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setFleurData(sorted);
        }
    };

    const handleSortingSeason = (sortField, sortOrder) => {
        console.log(sortField)
        console.log(sortOrder);
        if (sortField) {
            const sorted = [...fleurData].sort((a, b) => {
                if (a.season.name < b.season.name) {
                    return sortOrder === "asc" ? -1 : 1;
                }
                if (a.season.name > b.season.name) {
                    return sortOrder === "asc" ? 1 : -1;
                }
                return 0;
            });
            console.log(sorted)
            setFleurData(sorted);
        }
    };

    const createFleurList = () => {
        return fleurData.map((fleur) => {
            return <GenericRow setSubmitted={setSubmitted} key={fleur.id} item={fleur} url={url}></GenericRow>
        })



    }

    useEffect(() => {
        getfleurData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);

    return (


        <div>
            {isEmpty ? "Aucune fleurs" :

                <table className='table'>
                    <thead>
                        <tr>
                            <GenericTh handleSorting={handleSorting} value="id" name="Id" />
                            <GenericTh handleSorting={handleSorting} value="name" name="Nom" />
                            <GenericTh handleSorting={handleSorting} value="price" name="Price" />
                            <GenericTh handleSorting={handleSorting} value="stock" name="Stock" />
                            <GenericTh handleSorting={handleSortingSeason} value="season" name="Saison" />
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