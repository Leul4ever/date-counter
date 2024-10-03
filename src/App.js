import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}
function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2007");

  return (
    <div className="App">
      <div className="Buttons">
        <div className="step">
          <span>
            <button className="btn" onClick={() => setStep((m) => m - 1)}>
              -
            </button>
            Step:{step}
            <button className="btn" onClick={() => setStep((p) => p + 1)}>
              +
            </button>{" "}
          </span>
        </div>
        {/*  for counter */}
        <div className="counter ">
          <span>
            <button className="btn" onClick={() => setCount((m) => m - step)}>
              -
            </button>
            Count:{count}
            <button className="btn" onClick={() => setCount((p) => p + step)}>
              +
            </button>{" "}
          </span>
          <p>
            <span>
              {count === 0
                ? "Today is"
                : count > 0
                ? `${count} days from today is`
                : `${Math.abs(count)} days ago`}
            </span>
            <span>{date.toDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
