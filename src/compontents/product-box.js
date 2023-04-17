import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';

function ProductBox(props) {
    return (
            <>
                <Col xs={12} md={6} lg={3}>
                        <div className='product-box '>
                            <div className='product-img-box overflow-hidden position-relative'>
                                <img src="img/product-01.jpg" className='img-fluid'/>
                                <Button variant="success" className='position-absolute view start-50 translate-middle-x'>view</Button>
                            </div>
                            <div className='hstack justify-content-between py-3 align-items-center'>
                                <div>
                                    <h3 className='h6 text-muted fw-normal'>{props.name}</h3>
                                    <p>₹<span>{props.price}</span></p>
                                </div>
                                <Button variant="outline-success"><BsFillCartFill /></Button>
                            </div>
                        </div>
                </Col>
            </>
    );
}

export default ProductBox;