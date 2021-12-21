import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap'

export default function AddBook(){
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [publisher_id, setId] = useState()
    const [token, setToken] = useState([])
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(name !== '' && address !== ''  && publisher_id !== ''){
            const publisher = {
                name,
                address,
                publisher_id
            }

            axios.post('http://localhost:5000/addPublisher', publisher)
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
            <h3 className="label-margin">Add New Publisher</h3><br/>
                <Form className="center-form" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">Name</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Name" value={name} onChange={ e => setName(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Address</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Author" value={address} onChange={ e => setAddress(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Id</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Publisher Id" value={publisher_id} onChange={ e => setId(e.target.value) }/>
                    </Form.Group><br/>
                    <Button variant="success label-margin" type="submit">
                        Add Publisher
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