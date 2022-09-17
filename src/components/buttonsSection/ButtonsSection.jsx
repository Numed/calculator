import { useContext, useEffect } from "react";
import divide from "../../img/imgIcons/divide.svg";
import remove from "../../img/imgIcons/remove.svg";
import plusOrMinus from "../../img/imgIcons/plusOrMinus.svg";
import { MyContext } from "../contexts/Context";
import { Button, ButtonsInner, ButtonsContainer, Icons } from "./style";
import { dataButtons } from "../data/data";
import { useCustomHooks } from "../hooks/htpp.hook";

const ButtonsSection = () => {
  const { result, setResult, setPrevExpression } = useContext(MyContext);
  const {
    divideAction,
    history,
    setHistory,
    minusAction,
    plusAction,
    multiplyAction,
  } = useCustomHooks();
  let copyHistory = [];

  useEffect(() => {
    setExpression();
    // eslint-disable-next-line
  }, [history]);

  const clearAll = () => {
    setResult("0");
    setPrevExpression({});
    history.length = 0;
  };

  const setMinus = () => {
    const textToArray = Array.from(result);
    console.log(result.length);
    if (result.startsWith("–") && result.length > 1) {
      history.shift("–").toString().slice(1, 2);
      setHistory([...history]);
      textToArray.shift("–");
    } else if (result.startsWith("–")) {
      textToArray.shift("–");
      history.shift("–").toString().slice(1, 2);
      history.push("0");
      setHistory([...history]);
    } else {
      history.unshift("–").toString().slice(1, 2);
      setHistory([...history]);
      textToArray.unshift("–");
    }
    const text = textToArray.toString().replace(/,/g, "");
    setResult(text);
  };

  const removeLastAction = () => {
    const removeLastAction = result.slice(0, -1);
    if (result.length !== 1) {
      setResult(removeLastAction);
      history.pop();
    } else if (result === "-") {
      setResult("0");
    } else {
      setResult("0");
      history.pop();
    }
  };

  const clickHandler = (e) => {
    console.log("Inside Fucntion History", history);
    checkAction(e);
    if (
      e !== "0" &&
      e !== "00" &&
      e !== "=" &&
      e !== "+" &&
      e !== "-" &&
      e !== "*" &&
      e !== "/"
    ) {
      setHistory((prev) => [...prev, e]);
      copyHistory = [...history, e];
      return copyHistory;
    } else if (history.length > 0 && e !== "=") {
      setHistory((prev) => [...prev, e]);
      copyHistory = [...history, e];
      return copyHistory;
    }
    if (e === "=" && history.length > 2) {
      if (history.includes("-") && !history.toString().startsWith("-")) {
        minusAction();
      } else if (history.includes("+")) {
        plusAction();
      } else if (history.includes("*")) {
        multiplyAction();
      } else {
        divideAction();
      }
    }
  };

  const checkAction = (e) => {
    const actions = ["+", "-", "*", "/"];
    // eslint-disable-next-line
    actions.map((action) => {
      if (
        (e === "+" && history[history.length - 1] === action) ||
        (e === "-" && history[history.length - 1] === action) ||
        (e === "*" && history[history.length - 1] === action) ||
        (e === "/" && history[history.length - 1] === action)
      ) {
        history.pop();
      } else if (
        history[history.length - 1] !== action &&
        history.includes(action)
      ) {
        sliceExpression(action);
      }
    });
  };

  const sliceExpression = (action) => {
    if (action === "-") {
      minusAction();
    } else if (action === "+") {
      plusAction();
    } else if (action === "*") {
      multiplyAction();
    } else if (action === "/") {
      divideAction();
    }
  };

  const findDuplicates = (arr) => {
    let duplicats = arr.filter((item, index) => arr.indexOf(item) !== index);
    // eslint-disable-next-line
    let someArr = duplicats.map((item) => {
      if (item === "-" || item === "+" || item === "*" || item === "/") {
        return item;
      }
    });
    return someArr.toString().replace(/,/g, "");
  };

  const setExpression = () => {
    if (history.length === 0) {
      setPrevExpression({});
      return;
    } else if (findDuplicates(history)) {
      const duplicate = findDuplicates(history);
      if (duplicate === "-") {
        minusAction(duplicate);
      } else if (duplicate === "+") {
        plusAction(duplicate);
      } else if (duplicate === "*") {
        multiplyAction(duplicate);
      } else if (duplicate === "/") {
        divideAction(duplicate);
      }
    }
    const expression = history.toString().replace(/,/g, "");
    setResult(expression);
  };

  return (
    <ButtonsContainer className="button-container">
      <ButtonsInner>
        <Button className="button green" onClick={clearAll}>
          AC
        </Button>
        <Button className="button" onClick={setMinus}>
          <Icons className="green" src={plusOrMinus} alt="Expression" />
        </Button>
        <Button className="button" onClick={removeLastAction}>
          <Icons className="green" src={remove} alt="remove" />
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"/"}
        >
          <Icons className="red" src={divide} alt="divide" />
        </Button>
        {dataButtons.map(({ className, value }, i) => {
          return (
            <Button
              key={i}
              className={className}
              onClick={(e) => clickHandler(e.target.value)}
              value={value}
            >
              {value}
            </Button>
          );
        })}
      </ButtonsInner>
    </ButtonsContainer>
  );
};

export default ButtonsSection;
