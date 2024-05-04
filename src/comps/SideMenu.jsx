import React, {useState} from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap";
import logo from "./controller.svg";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/myApp.css";
import Home from "../pages/Home";
import TicTacToe from "../pages/TicTacToe";
import MemoryGamePage from "../pages/MemoryGamePage";

const SideMenu = () => {
    let [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="d-flex">
            <Navbar collapseOnSelect style={{backgroundColor: "#232B2B"}} variant="dark" expand="sm" className={`sideMenu mt-0 ${isCollapsed ? "sideMenuCol" : ""}`}>
                <Container className="d-flex flex-column justify-content-center align-content-center">
                    <NavbarBrand className="m-0 navbrandimg">
                        <Nav.Link to="/" as={NavLink}>
                            <img
                                src={logo}
                                alt="logo"
                                height="40px"
                                width="40px"
                            />
                        </Nav.Link>
                    </NavbarBrand>

                    <div className="d-flex justify-content-center d-none d-sm-block navlinks">
                        <NavbarCollapse id={"navbar-nav-toggle"}>
                            <Nav className="d-flex flex-column">
                                <Nav.Link className="sideNav mb-5" to="/" as={NavLink}>Home</Nav.Link>
                                <Nav.Link className="sideNav mb-5" to="/tictactoe"
                                          as={NavLink}>TicTacToe</Nav.Link>
                                <Nav.Link className="sideNav mb-5" to="/memorygame" as={NavLink}>Memory Game</Nav.Link>
                            </Nav>
                        </NavbarCollapse>
                    </div>


                    <div className="d-flex w-100 justify-content-between align-content-center">

                        <NavbarToggle className="m-0 navtog" area-controls="navbar-nav-toggle" onClick={() => setIsCollapsed(!isCollapsed)}/>

                        <div className="d-sm-none navlinks">
                            <NavbarCollapse id={"navbar-nav-toggle"} className="collapsemenu">
                                <Nav className="d-flex">
                                    <Nav.Link className="mb-5" to="/" as={NavLink}>Home</Nav.Link>
                                    <Nav.Link className="mb-5" to="/tictactoe" as={NavLink}>TicTacToe</Nav.Link>
                                    <Nav.Link  to="/memorygame" as={NavLink}>Memory Game</Nav.Link>
                                </Nav>
                            </NavbarCollapse>

                        </div>
                    </div>

                </Container>
            </Navbar>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/memorygame"} element={<MemoryGamePage/>}/>
                <Route path={"/tictactoe"} element={<TicTacToe/>}/>
            </Routes>
        </div>
    );
};

export default SideMenu;