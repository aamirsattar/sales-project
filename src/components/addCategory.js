import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap'

export default function AddCustomer(){
    const [name, setName] = useState()
    const [token, setToken] = useState([])
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        if(name !== ''){
            const category = {
                name
            }

            axios.post('http://localhost:5000/addCategory', category)
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
                <h3 className="label-margin">Add New Category</h3><br/>
                <Form className="center-form" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">Name</Form.Label>
                        <Form.Control className="field-length" type="text" placeholder="Enter Name" value={name} onChange={ e => setName(e.target.value) }/>
                    </Form.Group>
                    <br/>
                    <Button variant="success label-margin"  type="submit">
                        Add Category
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