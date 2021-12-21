import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap'

export default function AddBook(){
    const [price, setPrice] = useState()
    const [author, setAuthor] = useState()
    const [edition, setEdition] = useState()
    const [isPin, setIsPin] = useState(false)
    const [token, setToken] = useState([])
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(price !== '' && author !== ''  && edition !== ''){
            const book = {
                price,
                author,
                edition
            }

            axios.post('http://localhost:5000/addBook', book)
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
            <h3 className="label-margin">Add New Book</h3><br/>
                <Form className="center-form" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label className="label-margin">Price</Form.Label><br/>
                        <Form.Control className="field-length" type="number" placeholder="Enter Price" value={price} onChange={ e => setPrice(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Author</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Author" value={author} onChange={ e => setAuthor(e.target.value) }/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label className="label-margin">Edition</Form.Label><br/>
                        <Form.Control className="field-length" type="text" placeholder="Enter Edition" value={edition} onChange={ e => setEdition(e.target.value) }/>
                    </Form.Group><br/>
                    {/* <Form.Group>
                        <Form.Label>IsPin</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={ e => setPassword(e.target.value) }/>
                    </Form.Group> */}
                
                    <Button variant="success label-margin" type="submit">
                        Add Book
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