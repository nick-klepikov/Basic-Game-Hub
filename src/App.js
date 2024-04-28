import Header from "./comps/Header";
import "./style/myApp.css"
import Board from "./comps/Board";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";

function App() {

  let [cells, setCells] = useState([{value: "👽", id: uuidv4()}, {value: "👽", id: uuidv4()}, {value: "👀", id: uuidv4()},
                                       {value: "👀", id: uuidv4()}, {value: "🫄", id: uuidv4()}, {value: "🫄", id: uuidv4()},
                                       {value: "🌚", id: uuidv4()}, {value: "🌚", id: uuidv4()}, {value: "🧬", id: uuidv4()},
                                       {value: "🧬", id: uuidv4()}, {value: "⚰️", id: uuidv4()}, {value: "⚰️", id: uuidv4()},
  ]);
  const shuffleCells = () => {
      setCells(cells.sort(() => Math.random() - 0.5));
  };
  
  return (
    <div className="App">
        <Header/>
        <Board cells={cells}/>
    </div>
  );
}

export default App;
