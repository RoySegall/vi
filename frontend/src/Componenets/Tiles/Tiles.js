import {useState, useEffect} from 'react';
import {getDraggableNumbers, isGameSolved, switchNumberWithZero} from "./Utils.js";
import "./tiles.scss";

function drag(e) {
  e.dataTransfer.setData("number", e.target.dataset.number);
}

export default function Tiles({initialConfiguration, onSolveCallback}) {
  const [numbers, setNumbers] = useState(initialConfiguration);
  const [movesNumber, setMovesNumber] = useState(0);
  const [gameStartDate, setGameStartDate] = useState(null);
  const draggableNumbers = getDraggableNumbers(numbers);

  useEffect(() => {
    if (isGameSolved(numbers)) {
      onSolveCallback({movesNumber, gameStartDate});
    }

    if (!gameStartDate) {
      setGameStartDate(new Date());
    }

  }, [numbers]);

  const drop = (e) => {
    e.preventDefault();
    const movedNumber = e.dataTransfer.getData("number");

    const newNumbers = switchNumberWithZero(numbers, movedNumber);
    const newArray = [].concat([], newNumbers);

    setNumbers(newArray);
  };

  return <div className="tiles">
    {numbers.map((item, key) => <div
      data-number={item}
      draggable={draggableNumbers.includes(item)}
      onDragStart={(e) => {
        drag(e);
        setMovesNumber(movesNumber + 1)
      }}
      onDrop={drop}
      onDragOver={(e) => {e.preventDefault()}}
      key={key}
      className={item === 0 ? 'tile disabled' : 'tile'}>
        {item === 0 ? '' : item}
      </div>
    )}
  </div>
}
