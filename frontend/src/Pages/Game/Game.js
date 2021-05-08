import {useState} from 'react';
import {isEmpty} from "lodash";
import axios from "axios";
import {backendURL} from "config";
import Winner from "Componenets/Winnder/Winner";
import Tiles from "Componenets/Tiles/Tiles";
import Welcome from "Componenets/Welcome/Welcoms";

export default function Game() {
  const [numbers, setNumbers] = useState(null);
  const [name, setName] = useState(null);
  const [nameRequired, setNameRequired] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  const startHandler = async (e) => {
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
    await axios.post(`${backendURL()}/result`, {
      name,
      movesNumber,
      duration: ((currentDate - gameStartDate) / 1000)
    });
  };

  return <div className="wrapper">
    {showWinner && <Winner /> }
    {numbers ?
      <Tiles initialConfiguration={numbers} onSolveCallback={onSolveCallback}/> :
      <Welcome nameRequired={nameRequired} setName={setName} startHandler={startHandler} />
    }
  </div>;
}
