import Gallery from "../../component/Gallery/GenericGallery"
import FilterCardPlante from "../../component/Filter/FilterCardPlante"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Bouquet() {

    let url = 'plantes'
    const [plantesData, setPlanteData] = useState([]);
    const getBouquet = async () => {
        try {
            let { data } = await axios.get(url)
            setPlanteData(data);
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
            
            <FilterCardPlante url={url} setData={setPlanteData}></FilterCardPlante>
        
            <Gallery data={plantesData} name={url}></Gallery>
        </div>

    )
}