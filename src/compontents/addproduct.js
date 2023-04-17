import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import ProductCrud from './product';

function Addproduct() {
    const [name,setName]= useState("");
    const [price,setPrice]= useState();
    const [category,setCategory]= useState();
    const [image,setImage]= useState(null);
     
    const imageChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    console.log("image",image)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const newProduct ={
            name,
            price,
            category,
            image
        }
        console.log(newProduct)
        try{
            await ProductCrud.addProduct(newProduct);
        }
        catch(err){
            console.log("error");
        }
        setName("");
        setPrice("");
        setCategory("");
        setImage("");
    }

    return (
        <>
            <Container>
                <h2>add products</h2>
                <Col xs={7} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>product name</Form.Label>
                            <Form.Control type="text" placeholder="product name"  value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" placeholder="price"  value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>category</Form.Label>
                            <Form.Control type="text" placeholder="category"  value={category} onChange={(e)=>setCategory(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>category</Form.Label>
                            <Form.Control type="file" placeholder="category"  value={image} onChange={imageChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form></Col>
            </Container>
        </>
    );
}

export default Addproduct;