import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap'

export default function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(email !== '' && password != ''){
            const user = {
              email,
              password
            }

            axios.post('http://localhost:5000/login', user)
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('token', res.data.token)
                    // window.location = '/users/'
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
                <h3 className="label-margin">Login to your Account</h3><br/>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">Email</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Email" value={email} onChange={ e => setEmail(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Password</Form.Label><br/>
                        <Form.Control className="field-length" type="password" placeholder="Enter Password" value={password} onChange={ e => setPassword(e.target.value) }/>
                    </Form.Group>
                    <br/>
                    <Button variant="success label-margin" type="submit">
                        Login
                    </Button>
                    <br/><br/><br/>
                </Form>
            </div>
            </Container>
        </>
    )
}