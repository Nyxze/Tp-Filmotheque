import Card from "react-bootstrap/Card";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
export default function FilterCardPlante({ url, setData }) {

    const [priceMax, setPriceMax] = useState(0);
    const [priceMin, setPriceMin] = useState(0);
    const [search, setSearch] = useState("");
    const [minPriceFilter, setMinPriceFilter] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(priceMax);




    const getFilteredResult = async () => {

        try {

            let data;
            if (maxPriceFilter == 0 && search === "") {
                data = (await axios.get(url)).data;
            } else {
                data = (await axios.get(url + "/query?search=" + search + "&minPrice=" + minPriceFilter + "&maxPrice=" + maxPriceFilter)).data;
            }
            setData(data);

        } catch (err) {

        }

    }


    const getPriceMax = async () => {

        try {
            let { data } = await axios.get(url + "/price/max")
            setPriceMax(data);
        } catch (err) {
            setPriceMax(0);
        }
    }
    const getPriceMin = async () => {

        try {
            let { data } = await axios.get(url + "/price/min")
            setPriceMin(data);
        } catch (err) {
            setPriceMin(0);
        }
    }
    const resetValue = (e) => {
        setMinPriceFilter(0);
        setMaxPriceFilter(priceMax);
        setSearch("");

    }

    const Slider = () => {

        let priceMaxFloat = parseFloat(priceMax);
        let priceMinFloat = parseFloat(priceMin);

        if (priceMaxFloat === priceMinFloat) {
            priceMaxFloat++;
        }
        return <Nouislider onEnd={(data) => {
            setMinPriceFilter(data[0])
            setMaxPriceFilter(data[1])
        }
        } range={{ min: priceMinFloat, max: priceMaxFloat }} start={[priceMinFloat, priceMaxFloat]} connect />
    }


        ;

    useEffect(() => {
        getPriceMin();
        getPriceMax();
        getFilteredResult();
    }, [search, minPriceFilter, maxPriceFilter, priceMax])

    return (


        <Card className="m-2 col-2">
            <Card.Body >
                <Card.Title>
                    Filtre
                </Card.Title>
                <input value={search} onChange={(
                    { target: { value } }) => {

                    setSearch(value)

                }

                }>
                </input>
                {priceMax == priceMin ?
                    "" :
                    <div>
                        <br>
                        </br>
                        <Card.Text>
                            Prix
                        </Card.Text>
                        {Slider()}
                        <span> Min:{minPriceFilter == 0 ? priceMin : minPriceFilter} Max:{maxPriceFilter == 0 ? priceMax : maxPriceFilter}</span>


                    </div>
                }

                <Button onClick={resetValue}>
                    Reset
                </Button>
            </Card.Body>

        </Card>
    )
}