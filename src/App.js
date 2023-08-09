const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const step = 3;

export default function App() {
  function handlePrevious() {
    console.log("Previous");
  }
  function handleNext() {
    console.log("Next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step - 1 === 0 ? "active" : ""}>1</div>
        <div className={step - 1 === 1 ? "active" : ""}>2</div>
        <div className={step - 1 === 2 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}:{messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          className="btn btn-previous"
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={() => alert("previous")}
        >
          Previous
        </button>
        <button
          className="btn btn-next"
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={() => alert("Next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}
