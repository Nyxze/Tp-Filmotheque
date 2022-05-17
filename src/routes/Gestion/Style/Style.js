import React, { useState, useEffect } from 'react';
import AddStyle from '../../../component/Input/AddStyle'
import StyleComponent from '../../../component/Row/Style';
import axios from 'axios';
export default function Style() {

    const [stylesData, setStylesData] = useState([]);
    const [isSubmitted, setSubmitted] = useState(false);
    const [isEmpty, setIsEmpty] = useState();


    const getStylesData = async () => {
        const { data } = await axios.get('styles');

        if (data.length > 0) {
            setStylesData(data);
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }


    }

    useEffect(() => {
        getStylesData();
        setSubmitted(false);

    }, [isSubmitted, isEmpty]);


    const createStyleList = () => {

        return stylesData.map((style) => {

            return <StyleComponent setSubmitted={setSubmitted} key={style.libelle} style={style}></StyleComponent>
        })
    }


    return (
        <div >
            <h2> Liste des styles </h2>
            {isEmpty ? "Aucun styles" :
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Libelé</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {createStyleList()}

                    </tbody>
                </table>
            }
            <AddStyle setSubmitted={setSubmitted} />
        </div>
    )

}