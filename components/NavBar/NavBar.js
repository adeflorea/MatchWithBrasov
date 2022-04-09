import Image from "next/image"
import Link from "next/link"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import style from './navbar.module.scss'

//navbar-ul principal
export default function NavBar() {
    return (
        <Navbar className={style.navbar} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Match with Brasov 🍾</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Activities</Nav.Link>
                        <Nav.Link href="#link">Parties around you</Nav.Link>
                        <Nav.Link href="/chestionar">Chestionar</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}