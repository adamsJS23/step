import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
// const step = 3;

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    step > 1 && setStep(step - 1);
  }
  function handleNext() {
    step < 3 && setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}:{messages[step - 1]}
      </p>

      <div className="buttons">
        {/* <button
          className="btn btn-previous"
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handlePrevious}
        >
          Previous
        </button> */}
        <button
          className="btn btn-previous"
          style={{ backgroundColor: "#2b8a3e", color: "white" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="btn btn-next"
          style={{ backgroundColor: "#2b8a3e", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
        {/* <button
          className="btn btn-next"
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button> */}
      </div>
    </div>
  );
}
