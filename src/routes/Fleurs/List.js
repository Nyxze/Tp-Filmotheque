import Gallery from "../../component/Gallery/GenericGallery"
import axios from "axios";
import { useEffect, useState } from "react";
import FilterCardFleur from "../../component/Filter/FilterCardFleur";


export default function Bouquet() {

    let url = 'fleurs'
    const [fleurData, setFleurData] = useState([]);
    const getBouquet = async () => {
        try {
            let { data } = await axios.get(url)
            setFleurData(data);
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
           
                <FilterCardFleur url={url} setData={setFleurData}></FilterCardFleur>
            

            <Gallery data={fleurData} name={url}></Gallery>
        </div>
    )
}