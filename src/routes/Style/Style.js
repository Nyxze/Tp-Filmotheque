import React, { useState, useEffect } from 'react';
import StyleComponent from '../../component/Style';
import axios from 'axios';
export default function Style() {

    let URL_API = "http://localhost:8080/Tp-filmotheque-0.0.1-SNAPSHOT/api/style";
    const [stylesData, setStylesData] = useState([]);

    const getStylesData = async () => {
        const { data } = await axios.get(URL_API);
        setStylesData(data);

    }

    useEffect(() => {
        getStylesData();
    }, []);


    const createStyleList = () => {

        return stylesData.map((style) => {

            return <StyleComponent key={style.label} style={style}></StyleComponent>
        })
    }


    return (
        <div >
            <table className='table'>
                <thead>
                    <tr>
                    <th>Libelé</th>
                    <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                {createStyleList()}

                </tbody>
            </table>
        </div>
    )

}