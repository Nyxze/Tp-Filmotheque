import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navigate } from "react-router-dom";

export default function Register({loggedIn,setLoggedIn}) {


    const [inputField, setInputField] = useState({
        username:"",
        pswd:""
    });
    const [message, setMessage] = useState("");
   
 

    
    function handleInputChange(event) {

        const { name, value } = event.target;
        setInputField(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        let user = inputField;
       
        try {
            let res = await axios.post("user/login", user)
            console.log(res);
            if (res.status === 200) {
                setMessage("Bienvenue " + res.data.username);
                sessionStorage.setItem("user",JSON.stringify(res.data));
                setLoggedIn(true);
                event.target.reset();
            } 
        } catch (err) {
            console.log(err);
            setLoggedIn(false);
            setMessage("Wrong credentials");
        }


    }

    useEffect(() => {

    }, [inputField]);





    return (
        <div className='col-6'>
            {loggedIn && (<Navigate to="/home" replace={true}></Navigate>)}
            <div className=" justify-content-center">
                <Form onSubmit={handleSubmit} className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="username" value={inputField.name}
                            onChange={handleInputChange}
                            type="text" placeholder="Enter your First Name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  name = "pswd" onChange={handleInputChange} type="password" placeholder="Password" />
                    </Form.Group>    
                    <Button   variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </Form>
            </div>
        </div>
    )
}