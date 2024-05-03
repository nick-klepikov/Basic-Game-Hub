import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router";
import MemoryGamePage from "./MemoryGamePage";
import {Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const MemoryGameStartMenu = () => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    return (

        <div className="d-flex flex-column align-items-center vw-100 vh-100">
            <h1 style={{fontWeight: "350", color: "whitesmoke", borderBottom: "2px solid white"}}>Memory Game Menu</h1>
            <div className="d-flex flex-column vh-100 justify-content-center">
                <h3 style={{color: "whitesmoke"}}>Set the size of board</h3>

                <div className="d-flex align-items-center justify-content-center mb-2">
                    <select className="form-select me-2 w-50" aria-label="number-of-rows" required
                            onChange={(event) => setRows(+event.target.value)}>
                        <option selected value={0}>Rows</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>

                    <span>X</span>

                    <select className="form-select ms-2 w-50" aria-label="number-of-cols" required
                            onChange={(event) => setCols(+event.target.value)}>
                        <option selected value={0}>Cols</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>

                <div>
                    {!!(rows * cols % 2) || !(rows * cols) ?
                        <button className="startgamebutton" disabled>Start Game</button>
                        :
                        <Link to="/memorygame">
                            <button className="startgamebutton startgamebuttonhover">Start Game</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default MemoryGameStartMenu;