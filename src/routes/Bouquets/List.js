import Gallery from "../../component/Gallery/GenericGallery"
import FilterCardBouquet from "../../component/Filter/FilterCardBouquet"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Bouquet() {

    let url = 'bouquets'
    const [bouquetData, setBouquetData] = useState([]);
    const getBouquet = async () => {
        try {
            let { data } = await axios.get(url)
            setBouquetData(data);
            console.log(data);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBouquet()
    }, [])
    return (

        <div className="d-flex">
           
           
            <FilterCardBouquet url={url} setData={setBouquetData}></FilterCardBouquet>
            
            <Gallery data={bouquetData} name={url}></Gallery>
        </div>
    )
}