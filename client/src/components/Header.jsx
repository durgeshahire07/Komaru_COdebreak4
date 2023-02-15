import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";

const Header = (props) => {
  const onCanvasHandler = () => {
    props.onOpenCanvas(true);
  };
  return (
    <Navbar className="fixed-top" variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <button
          onClick={onCanvasHandler}
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Navbar.Brand className="fw-bold text-uppercase" href="#">
          Admin Dashboard
        </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex ms-auto mt-3 my-lg-0">
              <InputGroup className="my-1">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  <BsSearch />
                </Button>
              </InputGroup>
            </Form>
            <Nav className="my-2 my-lg-0">
              {/* <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            > */}
              <NavDropdown
                align="end"
                className="text-light"
                title={<BsFillPersonFill />}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
