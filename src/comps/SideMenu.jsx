import React, {useState} from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap";
import logo from "./controller.svg";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/myApp.css";

const SideMenu = () => {
    let [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect style={{backgroundColor: "darkslategrey"}} variant="dark" expand="sm" className={`sideMenu mt-0 ${isCollapsed ? "sideMenuCol" : ""}`}>
                <Container className="d-flex flex-column justify-content-center align-content-center">
                    <NavbarBrand href="/" className="m-0 navbrandimg">
                        <img
                            src={logo}
                            alt="logo"
                            height="40px"
                            width="40px"
                        />
                    </NavbarBrand>


                    <div className="d-flex justify-content-center d-none d-sm-block">
                        <NavbarCollapse id={"navbar-nav-toggle"}>
                            <Nav className="d-flex flex-column">
                                <Nav.Link className="sideNav mb-5" to="/" as={NavLink}>Home</Nav.Link>
                                <Nav.Link className="sideNav mb-5" to="/tictactoe"
                                          as={NavLink}>TicTacToe</Nav.Link>
                                <Nav.Link className="sideNav mb-5" to="/memory" as={NavLink}>Memory
                                    Game</Nav.Link>
                            </Nav>
                        </NavbarCollapse>
                    </div>


                    <div className="d-flex w-100 justify-content-between align-content-center">

                        <NavbarToggle className="m-0 navtog" area-controls="navbar-nav-toggle" onClick={() => setIsCollapsed(!isCollapsed)}/>

                        <div className="d-sm-none">
                            <NavbarCollapse id={"navbar-nav-toggle"} className="collapsemenu">
                                <Nav className="d-flex">
                                    <Nav.Link className="mb-5" to="/" as={NavLink}>Home</Nav.Link>
                                    <Nav.Link className="mb-5" to="/tictactoe" as={NavLink}>TicTacToe</Nav.Link>
                                    <Nav.Link  to="/memory" as={NavLink}>Memory Game</Nav.Link>
                                </Nav>
                            </NavbarCollapse>

                        </div>
                    </div>

                </Container>
            </Navbar>
        </>
    );
};

export default SideMenu;