import Header from "./comps/Header";
import "./style/myApp.css"
import Board from "./comps/Board";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import BottomMenu from "./comps/Bottom Menu";
import SideMenu from "./comps/SideMenu";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

    return (
        <div className="App">
           <div className="me-auto">
               <SideMenu />
           </div>

            {/*<Header/>*/}

            {/*<Board*/}
            {/*    cells={cells}*/}
            {/*    handleClick={handleClick}*/}
            {/*/>*/}


            {/*<BottomMenu*/}
            {/*    isRestartButtonClicked={isRestartButtonClicked}*/}
            {/*    setIsRestartButtonClicked={setIsRestartButtonClicked}*/}
            {/*    isGameOver={isGameOver}*/}
            {/*    tries={tries}*/}
            {/*    isGameWon={isGameOver}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
