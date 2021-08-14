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
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const [equation, setEquation] = useState([]);
  const [tempAnswer, setTempAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [decimal, setDecimal] = useState(false);
  const [deleted, setDeleted] = useState(true);

  const handleClick = (e) => {
    console.log(e.currentTarget.value);
    if (e.target.value !== "AC" && e.target.value !== "b") {
      setInput(e.target.value);
    }

    if (e.target.value === "AC") {
      setEquation([]);
      setTempAnswer("");
      setAnswer("");
      setDecimal(false);
      setInput("");
      return;
    } else if (e.currentTarget.value === "b") {
      if (equation[equation.length - 1] === ".") {
        setDecimal(false);
      }
      console.log("equation", equation);
      console.log("answer", [answer]);
      if (equation.length === 1) {
        setEquation([]);
        setTempAnswer("");
        setAnswer("");
        setDecimal(false);
        setInput("");
        console.log("SUPPUPUU");
      }
      equation.splice(-1);
      setDeleted(!deleted);
      return;
    } else if (
      operations.includes(e.target.value) &&
      operations.includes(equation[equation.length - 1])
    ) {
      equation.splice(-1);
    } else if (e.target.value === "=") {
      if (operations.includes(equation[equation.length - 1])) {
        equation.splice(-1);
      }
      if (operations.includes(equation[0]) && equation[0] !== "-") {
        equation.shift();
      }
      setTempAnswer(evaluate(equation.join("")));
      setEquation([answer]);
      setDecimal(false);
    } else if (operations.includes(e.target.value) && answer !== "") {
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

    if (decimal && e.target.value === ".") {
      return;
    }
    setEquation((equation) => [...equation, e.target.value]);
  };

  useEffect(() => {
    setAnswer(tempAnswer);
    setInput(answer);
    if (answer !== "" && !operations.includes(equation[equation.length - 1])) {
      setEquation([answer]);
    }
  }, [tempAnswer, answer, deleted, decimal]);

  return (
    <div className="grid justify-center content-center h-screen v-screen bg-gray-100">
      <div className="shadow-2xl">
        <Display input={input} equation={equation.join("")} />
        <Buttons handleClick={handleClick} />
      </div>
      <footer className="relative top-10 text-center font-semibold font-mono text-gray-500 overflow-y-hidden">
        © Made by{" "}
        <a
          className="hover:text-gray-700 hover:underline transition-all"
          href="https://github.com/kmallari"
        >
          kmallari
        </a>
      </footer>
    </div>
  );
}

export default App;
