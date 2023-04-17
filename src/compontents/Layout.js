import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { BsFillCartFill, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, IconName } from "react-icons/fa";

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="img/logo-01.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-4">
                            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
                            <Nav.Link href="#link" className="fw-bold">Shop</Nav.Link>
                            <Nav.Link href="#link" className="fw-bold">Categories</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Button variant="outline-success"><BsFillCartFill /></Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

export function Footer() {
    return (
        <>
            <footer className="text-bg-dark py-3">
                <Container> 
                    <Row>
                        <Col xs={12} md={3}>
                            <h2 className="pb-3">CATEGORIES</h2>
                            <ul className="list-unstyled">
                                <li>Women</li>
                                <li>Men</li>
                                <li>Shoes</li>
                                <li>Watches</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={3}>
                            <h2 className="pb-3">HELP</h2>
                            <ul className="list-unstyled">
                                <li>Track Order</li>
                                <li>Returns</li>
                                <li>Shipping</li>
                                <li>FAQs</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={3}>
                            <h2 className="pb-3">GET IN TOUCH</h2>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="d-flex">
                                <FaFacebookF className="me-4" />
                                <BsInstagram className="me-4"/>
                                <FaPinterestP className="me-4"/>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <h2 className="pb-3">NEWSLETTER</h2>
                            <ul className="list-unstyled">
                                <li>Women</li>
                                <li>Men</li>
                                <li>Shoes</li>
                                <li>Watches</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}
