import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQery";

import { Offcanvas, Collapse } from "react-bootstrap";
import { BsSpeedometer2, BsLayoutSplit, BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const CanvasMenu = ({ toggleCanvas, closeHandler }) => {
  const matches = useMediaQuery("(min-width: 992px)");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    closeHandler(false);
  };
  
  return (
    <div>
      <Offcanvas
        className="bg-dark text-white sidebar-nav"
        show={matches ? true : toggleCanvas}
        onHide={handleClose}
      >
        <Offcanvas.Header closeVariant="white" closeButton></Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  CORE
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3 active">
                  <span className="me-2">
                    <BsSpeedometer2 />
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider text-light border-top muted" />
              </li>
              <li>
                <div className="text-muted small text-uppercase px-3 fw-bold">
                  Interface
                </div>
              </li>
              <li>
                <a
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  href="#collapse"
                  as="a"
                  className="nav-link px-3 sidebar-link"
                >
                  <span>
                    <BsLayoutSplit className="me-2" />
                  </span>
                  <span>Layouts</span>
                  <span className="ms-auto right-icon">
                    <BsChevronDown />
                  </span>
                </a>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <Link to="patients" >
                    <ul className="navbar-nav ps-3">
                      <li>
                        
                          <span>
                            <BsLayoutSplit className="me-2" />
                          </span>
                          <span className="">Patients</span>
                        
                      </li>
                    </ul>
                    </Link>
                    <ul className="navbar-nav ps-3">
                      <li>
                        
                          <span>
                            <BsLayoutSplit className="me-2" />
                          </span>
                          <span>Nested Link</span>
                        
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CanvasMenu;
