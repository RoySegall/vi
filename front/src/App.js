import "./app.scss";
import {useState, useEffect} from 'react';
import Tiles from "./Componenets/Tiles/Tiles";
import {backendURL} from "./config";
import {isEmpty} from 'lodash';
import axios from 'axios';
import Winner from "./Componenets/Winnder/Winner";

export default function App() {
  const [numbers, setNumbers] = useState(null);
  const [name, setName] = useState(null);
  const [nameRequired, setNameRequired] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  const onClickHandler = async (e) => {
    setNameRequired(false);

    if (isEmpty(name)) {
      setNameRequired(true);
      return;
    }

    const {data: {numbers}} = await axios.get(`${backendURL()}/numbers`);
    setNumbers(numbers);
  };

  const onSolveCallback = async ({movesNumber, gameStartDate}) => {
    setShowWinner(true);

    const currentDate = new Date();
    const response = await axios.post(`${backendURL()}/result`, {
      name, movesNumber, duration: ((currentDate - gameStartDate) / 1000)
    });

    console.log(response);
  };

  return <div className="wrapper">
    {showWinner && <Winner /> }
    {numbers ? <Tiles
      initialConfiguration={numbers}
      onSolveCallback={onSolveCallback}
    /> : <>
      <h1>Welcome</h1>
      <input
        placeholder="Please enter your name"
        onChange={(e) => {setName(e.target.value)}}
        className={nameRequired && 'error'}
      />
      <button onClick={onClickHandler}>Start</button>
    </>}
  </div>;
}
