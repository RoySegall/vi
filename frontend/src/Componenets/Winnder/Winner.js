import {useWindowSize} from "react-use";
import Confetti from "react-confetti";
import winner from './winnder.svg';
import "./winnder.scss";

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
    </div>
  </>
}
