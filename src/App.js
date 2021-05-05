import "./app.css";
import {useState} from 'react';

const keyIndexForZero = (rows) => {};
const isDraggable = (rows, number) => {};
const switchNumberWithZero = (rows, numbers) => {};
const isGameSolved = (rows) => {};

export default function App() {
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,0,8,9,10,11,12,13,14,15]);

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

    console.log('moved on', currentNumber, 'moved to', movedNumber);

    setNumbers([1,2,3,4,5,6,7,11,8,9,10,0,12,13,14,15]);
  }

  return <div className="tiles">
    {numbers.map((item, key) => {

      const classes = item === 0 ? 'tile disabled' : 'tile';

      return <div
        data-number={item}
        draggable="true"
        onDragStart={drag}
        onDrop={drop}
        onDragOver={allowDrop}
        key={key}
        className={classes}
        >
        {item}
      </div>
    })}
  </div>
}
