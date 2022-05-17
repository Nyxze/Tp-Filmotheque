import Gallery from "../../component/Gallery/GenericGallery"
import axios from "axios";
import { useEffect, useState } from "react";


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
    },[])
    return (

        <div>
            <Gallery data={fleurData} name={url}></Gallery>
        </div>
    )
}