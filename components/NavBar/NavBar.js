import Image from "next/image"
import Link from "next/link"
import { Container, Navbar, Nav } from "react-bootstrap"
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
                        <Nav.Link href="/activities">Activities</Nav.Link>
                        <Nav.Link href="/activities_map">Activities Map</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}