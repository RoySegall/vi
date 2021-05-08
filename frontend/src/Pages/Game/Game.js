import {useState, useEffect} from 'react';
import {isEmpty} from "lodash";
import axios from "axios";
import {backendURL} from "config";
import Winner from "Componenets/Winner/Winner";
import Tiles from "Componenets/Tiles/Tiles";
import Welcome from "Componenets/Welcome/Welcoms";
import "./game.scss";

export default function Game({name, setName, restart = false}) {
  const [numbers, setNumbers] = useState(null);
  const [nameRequired, setNameRequired] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  const getNumbers = async () => {
    const {data: {numbers}} = await axios.get(`${backendURL()}/numbers`);
    setNumbers(numbers);
  }

  useEffect(async () => {
    if (restart) {
      await getNumbers();
    }
  }, []);

  const startHandler = async (e) => {
    setNameRequired(false);

    if (isEmpty(name)) {
      setNameRequired(true);
      return;
    }
    await getNumbers();
  };

  const onSolveCallback = async ({movesNumber, gameStartDate}) => {
    setShowWinner(true);
    const currentDate = new Date();
    await axios.post(`${backendURL()}/result`, {
      name,
      movesNumber,
      duration: ((currentDate - gameStartDate) / 1000)
    });
  };

  return <>
    {showWinner && <Winner /> }
    {numbers ?
      <Tiles initialConfiguration={numbers} onSolveCallback={onSolveCallback}/> :
      <Welcome nameRequired={nameRequired} setName={setName} startHandler={startHandler} />
    }
  </>;
}
