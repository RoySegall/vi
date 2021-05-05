import "./app.scss";
import {useState} from 'react';
import Tiles from "./Componenets/Tiles";

export default function App() {
  const [numbers, setNumbers] = useState([
    1,  2,  3,  4,
    5,  6,  7,  0,
    8,  9,  10, 11,
    12, 13, 14, 15
  ]);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("number", ev.target.dataset.number);
  }

  function drop(ev) {
    ev.preventDefault();
    const movedNumber = ev.dataTransfer.getData("number");
    const currentNumber = ev.target.dataset.number;
    setNumbers([1,2,3,4,5,6,7,11,8,9,10,0,12,13,14,15]);
  }

  return <Tiles
    numbers={numbers}
    allowDrop={allowDrop}
    drop={drop}
    drag={drag}
  />
}
