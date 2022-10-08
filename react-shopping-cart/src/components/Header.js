import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    const { cartCounter } = props;
    return (

        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link className='btn btn-success light' href="#/cart">Cart {cartCounter ? cartCounter : ''}</Nav.Link>
                        <Nav.Link href="#/sigin">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header