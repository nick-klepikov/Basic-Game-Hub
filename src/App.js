import Header from "./comps/Header";
import "./style/myApp.css"
import Board from "./comps/Board";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import BottomMenu from "./comps/Bottom Menu";

function App() {

    let [cells, setCells] = useState([]);
    let [curOpened, setCurOpened] = useState([]);
    let [isRestartButtonClicked, setIsRestartButtonClicked] = useState(false);
    let [isGameOver, setIsGameOver] = useState(false);
    let [tries, setTries] = useState(0);

    const fillCells = () => {
        let curArrOfEmojis = [], start = 0X1F600, end = 0X1F64F;
        for (let i = 0; i < 6; i++) {
            let currentEmoji = Math.floor(Math.random() * (end - start + 1) + start);
            curArrOfEmojis.push(String.fromCodePoint(currentEmoji));
        }

        let newCellArr = [];
        for (let emoji of curArrOfEmojis) {
            newCellArr.push({value: emoji, isGuessed: false, curState: false, id: uuidv4()});
            newCellArr.push({value: emoji, isGuessed: false, curState: false, id: uuidv4()});
        }

        newCellArr.sort(() => Math.random() - 0.5);

        setCells(newCellArr);
    };

    const handleRestartGame = () => {
        fillCells();
        setIsRestartButtonClicked(false);
        setTries(0);
        setIsGameOver(false);
    };

    const closeButtonsAfter2SecondsOrRemain = () => {
        if (curOpened[0].value === curOpened[1].value) {
            setCells(cells.map(cell => {
                if (cell.id === curOpened[0].id || cell.id === curOpened[1].id) return {...cell, isGuessed: true};
                return cell;
            }));
            setCurOpened([]);
            return;
        }

        setTimeout(() => {
            setCurOpened([]);
            setCells(cells.map(cell => {
                if (!cell.isGuessed) {
                    return {...cell, curState: false};
                }
                return cell;
            }));
        }, 2000)
    };

    const handleClick = (curClicked) => {
        if (curOpened.length === 2 || (curOpened.length && curClicked.id === curOpened[0].id) || curClicked.isGuessed) return;
        setCells(cells.map(cell => {
            if (cell.id === curClicked.id) {
                setCurOpened([...curOpened, cell]);
                return {...cell, curState: true};
            }
            return cell;
        }));
    };

    useEffect(() => {
        fillCells();
    }, [])

    useEffect(() => {
        if (isRestartButtonClicked) handleRestartGame();
    }, [isRestartButtonClicked]);

    useEffect(() => {
        if(cells.every(cell => cell.isGuessed)) {
            setIsGameOver(true);
        }
    }, [cells])

    useEffect(() => {
        if (curOpened.length === 2) {
            setTries(tries + 1);
            closeButtonsAfter2SecondsOrRemain();
        }
    }, [curOpened])



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
                tries={tries}
                isGameWon={isGameOver}
            />
        </div>
    );
}

export default App;
