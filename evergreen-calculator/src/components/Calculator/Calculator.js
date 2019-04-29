import React, { useState } from 'react';
import { Pane, Text } from 'evergreen-ui';
import './Calculator.css';
import Clock from '../Clock/Clock';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import ResultsScreen from '../ResultsScreen/ResultsScreen';
import Keypad from '../Keypad/Keypad';

const Calculator = () => {
  const [theme, setTheme] = useState("Light");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operation, setOperation] = useState("");
  const [accumulator, setAccumulator] = useState(0);

  const handleThemeChange = theme => setTheme(theme);

  const applyOperation = (op1, op2, operation) => {
    switch(operation) {
      case "+":
        return Number(op1) + Number(op2);
      case "-":
        return Number(op1) - Number(op2);
      case "*":
        return Number(op1) * Number(op2);
      case "/":
        return Number(op1) / Number(op2);
      default:
        return 0;
    }
  }

  const onKeypadClick = evt => {
    let clickedKey = evt.target.value;

    let acc = accumulator;
    let op1 = operand1;
    let op2 = operand2;
    let op = operation;

    if (!isNaN(clickedKey) || clickedKey === ".") {
      if (op1 === "" || op === "") {
        if (!(clickedKey === "." && op1.toString().indexOf(".") > -1)) {
          op1 = op1 === 0 ? "" + clickedKey : op1 + clickedKey;
          acc = op1;
        }
      } else {
        if (!(clickedKey === "." && op2.toString().indexOf(".") > -1)) {
          op2 = op2 === 0 ? "" + clickedKey : op2 + clickedKey;
          acc = op1 + " " + op + " " + op2;
        }
      }
    } else {
      if (clickedKey === "%") {
        if (op2 !== "") {
          op2 = Number(op2)/100;
        } else if (op1 !== "") {
          op1 = Number(op1)/100;
        }
      } else if (op === "" && (clickedKey === "+" || clickedKey === "-" || clickedKey === "*" || clickedKey === "/")) {
        op = clickedKey;
      } else if (clickedKey === "=") {
        op1 = applyOperation(op1, op2, op);
        op2 = "";
        op = "";
      } else if (clickedKey === "±") {
        if (op2 !== "") {
          op2 *= -1;
        } else if (op1 !== "") {
          op1 *= -1;
        }
      } else if (clickedKey === "DEL") {
        if (op2 !== "") {
          if (op2.toString().length === 1) {
            op2 = 0;
          } else {
            op2 = Number(op2.toString().substring(0, op2.toString().length-1))
          }
        } else if (op1 !== "") {
          if (op1.toString().length === 1) {
            op1 = 0;
          } else {
            op1 = Number(op1.toString().substring(0, op1.toString().length-1))
          }
        }
      } else {
        op1 = applyOperation(op1, op2, op);
        op2 = "";
        op = clickedKey;
      }
      acc = op1 + " " + op + " " + op2;
      
      if (clickedKey === "C") {
        op1 = "";
        op2 = "";
        acc = 0;
        op = "";
      }
    }

    if (acc.length > 37) {
      acc = "Error";
      op1 = "";
      op2 = "";
      op = "";
    }

    setAccumulator(acc);
    setOperand1(op1);
    setOperand2(op2);
    setOperation(op);
  }

  return (
    <div className="calculator-container">
      <Pane 
        margin={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Theme Picker</Text>
        <ThemeSwitcher selectedTheme={theme} onChangeTheme={handleThemeChange}/>
          <Pane
            clearfix
            elevation={4}
            backgroundColor={theme === "Light" ? "#DDEBF7" : "#425A70"}
            width={400}
            margin={32}
            padding={8}
            display="flex"
            flexDirection="column"
            className="calculator-content__container"
          >
            <Clock theme={theme}/>
            <ResultsScreen result={accumulator}/>
            <Keypad onKeyClick={onKeypadClick} selectedTheme={theme}/>
          </Pane>
      </Pane> 
    </div>
  );
}

export default Calculator;
