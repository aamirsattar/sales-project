import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap'

export default function AddCustomer(){
    const [name, setName] = useState()
    const [age, setAge] = useState(0)
    const [location, setLocation] = useState()
    const [token, setToken] = useState([])
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        if(name !== ''  && age != 0 && location !== ''){
            const customer = {
                name,
                age,
                location
            }

            axios.post('http://localhost:5000/addCustomer', customer)
                .then(res => {
                    console.log(res.data)
                    
                })
                .catch(err => console.log('error : ' + err))
        }else{
           alert('Fill out all the fields')
        }
    }
    if(token && token !== undefined && token !== ""){
        return (
            <>
            <Container>
            <br/><br/>
            <div className="background-div">
                <br/><br/>
                <h3 className="label-margin">Add New Customer</h3><br/>
                <Form className="center-form" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">Name</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Name" value={name} onChange={ e => setName(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Age</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Author" value={age} onChange={ e => setAge(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Location</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Edition" value={location} onChange={ e => setLocation(e.target.value) }/>
                    </Form.Group><br/>
                    <Button variant="success label-margin" type="submit">
                        Add Customer
                    </Button>
                    <br/><br/><br/>
                </Form>
                </div>
            </Container>
            </>
        )
    }else {
        window.location = '/login'
    }
}