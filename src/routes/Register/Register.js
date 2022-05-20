import React from 'react';
import Form from 'react-bootstrap/Form';
import RoleSelect from "../../component/Select/RoleSelect"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Register() {


    const [inputField, setInputField] = useState({
        username:"",
        pswd:""
    });
    const [message, setMessage] = useState("");
    const [role,setRole] = useState({
        name:"user"
    });
 


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
        user.role = role;
        console.log(user)

        try {
            let res = await axios.post("user/register", user)
    
            if (res.status === 200) {
                setInputField({});
                setMessage("User " + res.data+ " successfully");
                event.target.reset();
            } else {
                setMessage("Some error occured");
            }

        } catch (err) {
            console.log(err);
            setMessage("Errors")
        }


    }




    return (
        <div className='col-6'>

            <div className=" justify-content-center">
                <Form onSubmit={handleSubmit} className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={inputField.name}
                            onChange={handleInputChange}
                            type="text" placeholder="Enter your First Name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  name = "pswd" onChange={handleInputChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <RoleSelect setRoleSelect={setRole} roleSelect={role}></RoleSelect>
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </Form>
            </div>
        </div>
    )
}