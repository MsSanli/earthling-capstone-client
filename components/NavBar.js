import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import logo from '../public/img/earthling-logo.png';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image
              src={logo}
              className="img"
              width={70}
              height={70}
              alt="logo navbar"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/lnguage">
              <Nav.Link>Languages</Nav.Link>
            </Link>
            <Link passHref href="/subjects">
              <Nav.Link>Subjects</Nav.Link>
            </Link>
            <Link passHref href="/entries">
              <Nav.Link>Entries</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
