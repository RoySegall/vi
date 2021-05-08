import "./app.scss";
import {useState} from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Game from "./Pages/Game/Game";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";

export default function App() {

  // I should use a state like redux, recoil, mobx or maybe the context API but... No time! ⏰ 🐰
  const [name, setName] = useState(null);
  const [restart, setRestart] = useState(false);

  return <div className="wrapper"><Router>
    <Switch>

      <Route path="/leaderboard">
        <Leaderboard setRestart={setRestart}/>
      </Route>

      <Route path="/">
        <Game name={name} setName={setName} restart={restart}/>
      </Route>

    </Switch>
  </Router></div>
}
