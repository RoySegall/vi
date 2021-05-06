import "./tiles.scss";
import {getDraggableNumbers} from "./Utils.js";


export default function Tiles({numbers, allowDrop, drop, drag}) {
  const draggableNumbers = getDraggableNumbers(numbers);
  return <div className="tiles">
    {numbers.map((item, key) => <div
      data-number={item}
      draggable={draggableNumbers.includes(item)}
      onDragStart={drag}
      onDrop={drop}
      onDragOver={allowDrop}
      key={key}
      className={item === 0 ? 'tile disabled' : 'tile'}>
        {item === 0 ? '' : item}
      </div>
    )}
  </div>
}
