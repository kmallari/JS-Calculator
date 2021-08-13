// things to fix/add:
// a number cannot accept more than one decimal point
// error catching for when synta error happens
// percentage functionality

import Buttons from "./Buttons";
import Display from "./Display";
import { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const operations = ["/", "*", "+", "-"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const [equation, setEquation] = useState([]);
  const [tempAnswer, setTempAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [decimal, setDecimal] = useState(false);

  const handleClick = (e) => {
    if (e.target.value !== "AC" && e.target.value !== "b"){
      setInput(e.target.value);
    }

    if (e.target.value === "AC") {
      setEquation([]);
      setTempAnswer("");
      setAnswer("");
      setDecimal(false);
      return;
    } else if (e.target.value === "b") {
      if (equation[equation.length-1] === ".") {
        setDecimal(false);
      }
      equation.splice(-1);
      setEquation((equation) => [...equation]);
      return;
    } else if (
      operations.includes(e.target.value) &&
      operations.includes(equation[equation.length - 1])
    ) {
      equation.splice(-1);
    } else if (e.target.value === "=") {
      setTempAnswer(evaluate(equation.join("")));
      setEquation([answer]);
    } else if (operations.includes(e.target.value) && answer !== "") {
      console.log("does this run");
      setTempAnswer("");
    } else if (answer !== "" && numbers.includes(e.target.value)) {
      setEquation([]);
      setTempAnswer("");
      setAnswer("");
    } else if (e.target.value === ".") {
      setDecimal(true);
    } else if (operations.includes(e.target.value)) {
      setDecimal(false);
    }

    if (decimal && e.target.value === ".") { return }
    setEquation((equation) => [...equation, e.target.value]);
  };

  useEffect(() => {
    setAnswer(tempAnswer);
    setInput(answer);
    if (answer !== "" && !operations.includes(equation[equation.length - 1])) {
      setEquation([answer]);
    }
  }, [tempAnswer, answer]);

  // console.log("equation", equation);
  // console.log("answer", answer);

  return (
    <div className="grid grid-row-2 justify-center content-center h-screen">
      <Display input={input} equation={equation.join("")} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

export default App;
