import axios from 'axios';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';

export default function StyleSelect({ styleSelect, setStyleSelect }) {


   
    const [styleData, setStyleData] = useState([]);

    const getStyles = async () => {

        try {
            const { data } = await axios.get('styles');
            setStyleData(data);
        } catch (err) {
            console.log(err)
        }
    }

    const styleOption = () => {

        return (
            styleData.map(style => <option value={style.id} key={style.libelle}>{style.libelle}</option>)
        )
    }

    useEffect(() => {
        getStyles();
    }, []);

    return (

        <>
            <div className='m-2 col-8 d-inline-flex align-items-center'>
                <Form.Label className='m-2' >Style</Form.Label>

                <Form.Select disabled={(styleData.length ? false : true)} onChange={(e) => {
                    console.log(e.target.selected)
                    setStyleSelect({
                        id: e.target.value
                    }
                    )
                }} name="style">
                    {styleSelect ?
                        <option value={0}>--Select a Style--</option> :
                        ""
                    }

                    {styleData.length ?
                        styleOption()
                        :
                        <option>--Pas de style disponible--</option>
                    }

                </Form.Select>
            </div>


        </>
    )

}