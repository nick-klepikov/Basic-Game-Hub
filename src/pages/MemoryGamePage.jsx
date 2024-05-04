import React, {useEffect, useState} from 'react';
import Board from "../comps/Board";
import BottomMenu from "../comps/Bottom Menu";
import {v4 as uuidv4} from "uuid";
import MemoryGameStartMenu from "./MemoryGameStartMenu";
import Header from "../comps/Header";

const MemoryGamePage = () => {
    let [cells, setCells] = useState([]);
    let [curOpened, setCurOpened] = useState([]);
    let [isRestartButtonClicked, setIsRestartButtonClicked] = useState(false);
    let [isGameOver, setIsGameOver] = useState(false);
    let [tries, setTries] = useState(0);
    let [isGameSettingsSet, setIsGameSettingsSet] = useState(false);
    let [rows, setRows] = useState(0);
    let [cols, setCols] = useState(0);
    let title = "Memory Game"
    const fillCells = () => {
        let curArrOfEmojis = [], start = 0X1F600, end = 0X1F64F;
        for (let i = 0; i < rows * cols / 2; i++) {
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
        }, 1000)
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
    const handleRowsChange = (num) => {
        setRows(num);
    };
    const handleColsChange = (num) => {
        setCols(num);
    };

    useEffect(() => {
        if(isGameSettingsSet) {
            fillCells();
            setIsGameOver(false);
        }
    }, [isGameSettingsSet])

    useEffect(() => {
        if (isRestartButtonClicked) handleRestartGame();
    }, [isRestartButtonClicked]);

    useEffect(() => {
        if (cells.every(cell => cell.isGuessed)) {
            setIsGameOver(true);
        } else {
            setIsGameOver(false);
        }
    }, [cells])

    useEffect(() => {
        if (curOpened.length === 2) {
            setTries(tries + 1);
            closeButtonsAfter2SecondsOrRemain();
        }
    }, [curOpened])

    return (
        <div>
            {isGameSettingsSet ?
                <div className="d-flex flex-column align-items-center vw-100 vh-100">
                    <Header title={title}/>
                    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
                        <Board
                            cells={cells}
                            handleClick={handleClick}
                            rows={rows}
                            cols={cols}
                        />
                        <BottomMenu
                            tries={tries}
                            setIsRestartButtonClicked={setIsRestartButtonClicked}
                            isGameOver={isGameOver}
                        />
                    </div>
                </div> :
                <MemoryGameStartMenu
                    rows={rows}
                    cols={cols}
                    handleRowsChange={handleRowsChange}
                    handleColsChange={handleColsChange}
                    setIsGameSettingsSet={setIsGameSettingsSet}
                />
            }


        </div>

    );
};

export default MemoryGamePage;