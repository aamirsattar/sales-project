import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap'
import './style.css'

export default function Register(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fname, setFirstName] = useState()
    const [lname, setLastName] = useState()
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(email !== '' && password !== ''  && fname !== '' && lname !== ''){
            const user = {
                fname,
                lname,
                email,
                password
            }

            axios.post('http://localhost:5000/register', user)
                .then(res => {
                    console.log(res.data)
                    
                })
                .catch(err => console.log('error : ' + err))
        }else{
           alert('Fill out all the fields')
        }
    }
    return (
        <>
        <Container>
        <br/><br/>
        <div className="background-div">
            <br/><br/>
            <h3 className="label-margin">Create New Account</h3><br/>
                <Form className="center-form" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">First Name</Form.Label>
                        <Form.Control className="field-length" type="text" placeholder="Enter Name" value={fname} onChange={ e => setFirstName(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Last Name</Form.Label>
                        <Form.Control className="field-length" type="text" placeholder="Enter Lastname" value={lname} onChange={ e => setLastName(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Email</Form.Label>
                        <Form.Control className="field-length" type="text" placeholder="Enter Email" value={email} onChange={ e => setEmail(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Password</Form.Label>
                        <Form.Control className="field-length" type="password" placeholder="Enter Password" value={password} onChange={ e => setPassword(e.target.value) }/>
                    </Form.Group>
                <br/>
                    <Button variant="success label-margin" onClick={() => {window.location= '/login'}} type="submit">
                        Register
                    </Button>
                    <br/><br/><br/>
                </Form>
        </div>
        </Container>
        </>
    )
}