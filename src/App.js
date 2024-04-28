import Header from "./comps/Header";
import "./style/myApp.css"
import Board from "./comps/Board";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import BottomMenu from "./comps/Bottom Menu";

function App() {

    let [cells, setCells] = useState([]);

    const fillCells = () => {
        let curArrOfEmojis = [], start = 0X1F600, end = 0X1F64F;
        for(let i = 0; i < 6; i++) {
            let currentEmoji = Math.floor(Math.random() * (end - start + 1) + start);
            curArrOfEmojis.push(String.fromCodePoint(currentEmoji));
        }

        let newCellArr = [];
        for(let emoji of curArrOfEmojis) {
            newCellArr.push({value: emoji, curState: false, id: uuidv4()});
            newCellArr.push({value: emoji, curState: false, id: uuidv4()});
        }

        newCellArr.sort(() => Math.random() - 0.5);

        setCells(newCellArr);
    };

    useEffect(() => {
        fillCells();
    }, [])


    let [isRestartButtonClicked, setIsRestartButtonClicked] = useState(false);
    let [isGameOver, setIsGameOver] = useState(false);
    const handleRestartGame = () => {
        fillCells();
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
