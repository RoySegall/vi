import "./app.scss";
import {useState, useEffect} from 'react';
import Tiles from "./Componenets/Tiles";

export default function App() {
  const [numbers, setNumbers] = useState(null);
  const onSolveCallback = () => {};

  useEffect(() => {
    setNumbers([
      1,  2,  3,  4,
      5,  6,  7,  8,
      9,  10, 11, 12,
      13, 14, 0, 15
    ]);
  }, []);

  return numbers && <Tiles
    initialConfiguration={numbers}
    onSolveCallback={onSolveCallback}
  />;
}
