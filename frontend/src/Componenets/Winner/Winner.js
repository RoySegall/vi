import {useWindowSize} from "react-use";
import Confetti from "react-confetti";
import winner from './winner.svg';
import "./winner.scss";
import {Link} from "react-router-dom";

export default function Winner() {
  const { width, height } = useWindowSize();

  return <>
    <Confetti
      width={width}
      height={height}
    />

    <div className="winner">
      <h2>You made it!</h2>

      <img src={winner} />

      <Link to={"/leaderboard"}>Click here to see the best players</Link>
    </div>
  </>
}
