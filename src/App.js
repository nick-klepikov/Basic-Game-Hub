import Header from "./comps/Header";
import "./style/myApp.css"
import Board from "./comps/Board";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import BottomMenu from "./comps/Bottom Menu";

function App() {

    let [cells, setCells] = useState([
        {value: "👽", curState: false, id: uuidv4()}, {value: "👽", curState: false, id: uuidv4()}, {
            value: "👀",
            curState: false,
            id: uuidv4()
        },
        {value: "👀", curState: false, id: uuidv4()}, {value: "🫄", curState: false, id: uuidv4()}, {
            value: "🫄",
            curState: false,
            id: uuidv4()
        },
        {value: "🌚", curState: false, id: uuidv4()}, {value: "🌚", curState: false, id: uuidv4()}, {
            value: "🧬",
            curState: false,
            id: uuidv4()
        },
        {value: "🧬", curState: false, id: uuidv4()}, {value: "⚰️", curState: false, id: uuidv4()}, {
            value: "⚰️",
            curState: false,
            id: uuidv4()
        },
    ]);


    let [isRestartButtonClicked, setIsRestartButtonClicked] = useState(false);
    let [isGameOver, setIsGameOver] = useState(false);
    const handleRestartGame = () => {
        let newCells = cells;
        newCells.map(el => el.curState = false);
        setCells(newCells);

        setCells(cells.sort(() => Math.random() - 0.5));
        setIsRestartButtonClicked(false);
    };

    useEffect(() => {
        if(isRestartButtonClicked) handleRestartGame();
    }, [isRestartButtonClicked]);

    const handleClick = (event, id) => {
        setCells(cells.map(cell => {
            return cell.id === id ? {...cell, curState: !cell.curState} : cell;
        }));
    };


    return (
        <div className="App">
            <Header/>

            <Board
                cells={cells}
                handleClick={handleClick}
            />

            <BottomMenu
                isRestartButtonClicked={isRestartButtonClicked}
                setIsRestartButtonClicked={setIsRestartButtonClicked}
                isGameOver={isGameOver}
            />
        </div>
    );
}

export default App;
