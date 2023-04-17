import 'bootstrap/dist/css/bootstrap.min.css';
import '../assest/style.css';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import Header, { Footer } from './Layout';
import ProductBox from './product-box';
import Addproduct from './addproduct';
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import ProductCrud from './product';



function Home() {
    // const ProductList = () => {
        const [products, setProducts] = useState([]);
        useEffect(() => {
            getProducts();
        }, []);
        const getProducts = async () => {
            const data = await ProductCrud.getAllProducts();
            console.log(data.docs);
            setProducts(data.docs.map((doc) => ({ ...doc.data(),  id: doc.id })))
            console.log(products)
        }
    // };
    return (
        <>
            <Header />
            <main>
                <Addproduct />
                <section>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/slide-01.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption className='bg-dark w-100 h-100 top-0 start-0 bg-opacity-50 d-flex justify-content-center align-items-center'>
                                <div className=''>
                                    <h3 className='display-3'>Women Collection  2018</h3>
                                    <p className='display-5'>New Season</p>
                                    <Button variant="success" className='rounded-pill py-2 px-4'>Shop Now</Button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/slide-02.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption className='bg-dark w-100 h-100 top-0 start-0 bg-opacity-50 d-flex justify-content-center align-items-center'>
                                <div className=''>
                                    <h3 className='display-3'>Men New-season  </h3>
                                    <p className='display-5'>Jackets & Coats</p>
                                    <Button variant="success" className='rounded-pill py-2 px-4'>Shop Now</Button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/slide-03.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption className='bg-dark w-100 h-100 top-0 start-0 bg-opacity-50 d-flex justify-content-center align-items-center'>
                                <div className=''>
                                    <h3 className='display-3'>Men Collection  2018</h3>
                                    <p className='display-5'>New arrivals</p>
                                    <Button variant="success" className='rounded-pill py-2 px-4'>Shop Now</Button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section className='py-5'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={4} className="py-2 py-lg-0">
                                <div className='about-box border position-relative bg-success overflow-hidden'>
                                    <img src='img/banner-01.jpg' className='img-fluid' />
                                    <div className='about-content-box position-absolute top-0 strat-0 p-4'>
                                        <h3 className='fw-bolder'>Women</h3>
                                        <h5 className='fw-semibold font-14'>spring 2018</h5>
                                    </div>
                                    <Button variant='light' className='rounded-0 about-button py-2 px-4'>SHOP-NOW</Button>
                                </div>
                            </Col>
                            <Col xs={12} lg={4} className="py-2 py-lg-0">
                                <div className='about-box border position-relative overflow-hidden bg-success'>
                                    <img src='img/banner-02.jpg' className='img-fluid ' />
                                    <div className='about-content-box position-absolute top-0 strat-0 p-4'>
                                        <h3 className='fw-bolder'>Men</h3>
                                        <h5 className='fw-semibold font-14'>spring 2018</h5>
                                    </div>
                                    <Button variant='light' className='rounded-0 about-button py-2 px-4'>SHOP-NOW</Button>
                                </div>
                            </Col>
                            <Col xs={12} lg={4} className="py-2 py-lg-0">
                                <div className='about-box border position-relative overflow-hidden bg-success' >
                                    <img src='img/banner-03.jpg' className='img-fluid' />
                                    <div className='about-content-box position-absolute top-0 strat-0 p-4'>
                                        <h3 className='fw-bolder'>Accessories</h3>
                                        <h5 className='fw-semibold font-14'>New Trend</h5>
                                    </div>
                                    <Button variant='light' className='rounded-0 about-button py-2 px-4'>SHOP-NOW</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            {
                                products.map((doc,index)=>{
                                    return(
                                        <ProductBox  name={doc.name} price={doc.price} key={doc.id} />
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Home;