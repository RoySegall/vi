import "./app.scss";
import {useState, useEffect} from 'react';
import Tiles from "./Componenets/Tiles";
import {backendURL} from "./config";
import {isEmpty} from 'lodash';
import axios from 'axios';

export default function App() {
  const [numbers, setNumbers] = useState(null);
  const [name, setName] = useState(null);
  const [nameRequired, setNameRequired] = useState(false);

  const onClickHandler = async (e) => {
    setNameRequired(false);

    if (isEmpty(name)) {
      setNameRequired(true);
      return;
    }

    const {data: {numbers}} = await axios.get(`${backendURL()}/numbers`);
    setNumbers(numbers);
  };

  const onSolveCallback = () => {};

  return <div className="wrapper">

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
