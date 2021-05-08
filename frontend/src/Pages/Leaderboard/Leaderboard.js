import {Redirect} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {backendURL} from "config";
import ResultsTable from "./ResultsTable";
import "./leaderboard.scss";

export default function Leaderboard({setRestart}) {
  const [redirect, setRedirect] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(async () => {
    // When viewing the leader board we need to reset the restart state.
    setRestart(false);

    const {data: {results}} = await axios.get(`${backendURL()}/results`);
    setResults(results);
  }, []);

  if (redirect) {
    // The user wanted another round, redirect the user to the frontpage after the setRestart set to true.
    return <Redirect to={"/"}/>
  }

  return <div className="leader-board">
    <h1>Leader board</h1>
    {results && <ResultsTable results={results} />}

    <div className="go-back">
      Want to play again? <a href={"#"} onClick={(e) => {
      e.preventDefault();
      setRestart(true);
      setRedirect(true);
    }}>Click here!</a>
    </div>

  </div>
}
