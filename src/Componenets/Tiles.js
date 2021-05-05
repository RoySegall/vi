import "./tiles.scss";

export default function Tiles({numbers, allowDrop, drop, drag}) {
  return <div className="tiles">
    {numbers.map((item, key) => <div
      data-number={item}
      draggable="true"
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
