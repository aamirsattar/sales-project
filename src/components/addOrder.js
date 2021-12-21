import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap'

export default function AddBook(){
    const [customer_id, setCustomerID] = useState()
    const [order_id, setOrderID] = useState()
    const [book_id, setBookID] = useState()
    const [token, setToken] = useState([])
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(customer_id !== '' && order_id !== ''  && book_id !== ''){
            const order = {
                customer_id,
                order_id,
                book_id
            }

            axios.post('http://localhost:5000/addOrder', order)
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
            <h3 className="label-margin">Add New Order</h3><br/>
                <Form className="center-form" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">Customer ID</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Customer ID" value={customer_id} onChange={ e => setCustomerID(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Book ID</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Book ID" value={book_id} onChange={ e => setBookID(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Order ID</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Order Id" value={order_id} onChange={ e => setOrderID(e.target.value) }/>
                    </Form.Group><br/>
                    <Button variant="success label-margin" type="submit">
                        Add Order
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