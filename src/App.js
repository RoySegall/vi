import "./app.scss";
import {useState, useEffect} from 'react';
import Tiles from "./Componenets/Tiles";
import {isGameSolved, switchNumberWithZero} from "./Componenets/Utils"

export default function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    console.log(isGameSolved(numbers));
  }, [numbers]);

  useEffect(() => {
    setNumbers([
      1,  2,  3,  4,
      5,  6,  7,  8,
      9,  10, 11, 12,
      13, 14, 0, 15
    ]);
  }, []);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("number", ev.target.dataset.number);
  }

  function drop(ev) {
    ev.preventDefault();
    const movedNumber = ev.dataTransfer.getData("number");
    const newNumbers = switchNumberWithZero(numbers, movedNumber);
    const newArray = [].concat([], newNumbers);
    setNumbers(newArray);
  }

  return <Tiles
    numbers={numbers}
    allowDrop={allowDrop}
    drop={drop}
    drag={drag}
  />
}
