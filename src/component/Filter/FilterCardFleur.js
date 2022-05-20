import Card from "react-bootstrap/Card";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SeasonSelect from "../Select/SeasonSelect";

import Button from "react-bootstrap/esm/Button";
export default function FilterCardFleur({ url, setData }) {

    const [priceMax, setPriceMax] = useState(0);
    const [priceMin, setPriceMin] = useState(0);
    const [search, setSearch] = useState("");
    const [minPriceFilter, setMinPriceFilter] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(priceMax);
    const [seasonSelect, setSeasonSelect] = useState({
        id: 0
    });




    const getFilteredResult = async () => {

        try {

            let data;
            if (maxPriceFilter == 0 && search === "") {
                data = (await axios.get(url)).data;
            } else {
                data = (await axios.get(url + "/query?search=" + search + "&minPrice=" + minPriceFilter + "&maxPrice=" + maxPriceFilter + "&season=" + seasonSelect.id)).data;
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

        }
    }
    const getPriceMin = async () => {

        try {
            let { data } = await axios.get(url + "/price/min")
            setPriceMin(data);
        } catch (err) {

        }
    }
    const resetValue = () => {
        setSeasonSelect({
            id: 0
        });
        setMinPriceFilter(0);
        setSearch("");
        setMaxPriceFilter(priceMax);


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
    }, [search, minPriceFilter, maxPriceFilter, seasonSelect, priceMax])

    return (


        <Card className="m-5 col-2">
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


                <SeasonSelect seasonSelect={seasonSelect} setSeasonSelect={setSeasonSelect}></SeasonSelect>

                <Button onClick={resetValue}>
                    Reset
                </Button>
            </Card.Body>

        </Card>
    )
}