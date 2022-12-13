// import {  fragment } from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

import CartWidget from "../components/cartWidget"
import ItemListContainer from "../components/itemListContainer"

const NavBarExample = function (){
    return (
        <>
    <Navbar className="navBg" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as="Link" to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>            
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
            <Nav.Link as={Link} to="/item">Detalle producto</Nav.Link>
            {/* <Nav.Link href="#"><CartWidget /></Nav.Link> */}
            <Nav.Link as={Link} to="#"> <CartWidget /> </Nav.Link>
            <Nav.Link as={Link} to="/itemListContainer">ItemListContainer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <section>
        <Outlet></Outlet>
    </section>
        </>

    )
}
export default NavBarExample