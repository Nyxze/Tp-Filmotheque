
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


    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...bouquetData].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            console.log(sorted)
            setBouquetData(sorted);
        }
    };

    const handleSortingSeason = (sortField, sortOrder) => {
        console.log(sortField)
        console.log(sortOrder);
        if (sortField) {
            const sorted = [...bouquetData].sort((a, b) => {
                if (a.season.name < b.season.name) {
                    return sortOrder === "asc" ? -1 : 1;
                }
                if (a.season.name > b.season.name) {
                    return sortOrder === "asc" ? 1 : -1;
                }
                return 0;
            });
            console.log(sorted)
            setBouquetData(sorted);
        }
    };

    const handleSortingStyle = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...bouquetData].sort((a, b) => {
                if (a.style.libelle < b.style.libelle) {
                    return sortOrder === "asc" ? -1 : 1;
                }
                if (a.style.libelle > b.style.libelle) {
                    return sortOrder === "asc" ? 1 : -1;
                }
                return 0;
            });
            console.log(sorted)
            setBouquetData(sorted);
        }
    };




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

    }, [isSubmitted, isEmpty,]);

    return (


        <div>
            {isEmpty ? "Aucune bouquets" :

                <table className='table'>
                    <thead>
                        <tr>
                            <GenericTh handleSorting={handleSorting} value="id" name="Id" />
                            <GenericTh handleSorting={handleSorting} value="name" name="Nom" />
                            <GenericTh handleSorting={handleSorting} value="price" name="Tarifs" />
                            <GenericTh handleSorting={handleSorting} value="stock" name="Quantité" />
                            <GenericTh handleSorting={handleSortingSeason} value="season" name="Saison" />
                            <GenericTh handleSorting={handleSortingStyle} value="style" name="Style" />
                            <GenericTh name="Actions" isSortable={false} />


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