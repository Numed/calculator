import { useState, useContext, useEffect } from "react";
import divide from "../../img/imgIcons/divide.svg";
import remove from "../../img/imgIcons/remove.svg";
import plusOrMinus from "../../img/imgIcons/plusOrMinus.svg";
import { MyContext } from "../context/Context";
import {Button, ButtonsInner, ButtonsContainer, Icons} from "./style";
import { dataButtons } from "../data/data";

const ButtonsSection = () => {
  const [history, setHistory] = useState([]);
  const { result, setResult, setPrevExpression } = useContext(MyContext);

  useEffect(() => {
    setExpression();
    // eslint-disable-next-line
  }, [history]);

  const clearAll = () => {
    setResult(0);
    setPrevExpression({});
    history.length = 0;
  };

  const setMinus = () => {
    const textToArray = Array.from(result);
    if (result.startsWith("-")) {
      history.shift("-").toString().slice(1, 2);
      setHistory([...history]);
      textToArray.shift("-");
    } else {
      history.unshift("-").toString().slice(1, 2);
      setHistory([...history]);
      textToArray.unshift("-");
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
      setResult(0);
    } else {
      setResult(0);
      history.pop();
    }
  };

  const clickHandler = (e) => {
    if (e !== "00" && e !== "=") {
      setHistory([...history, e]);
    }else if(history.length > 0){
      setHistory([...history, e]);
    }
    if (e === "=") {
      if (history.includes("-") && !history.toString().startsWith("-")) {
        minusAction();
      }else if ((history.includes("+"))){
        plusAction();
      }else if ((history.includes("*"))){
        multiplyAction();
      }else{
        divideAction();
      }
    }
  };


  const setExpression = () => {
    if (history.length === 0) {
      setPrevExpression({});
      return;
    }
    const expression = history.toString().replace(/,/g, "");
    setResult(expression);
  };

  const minusAction = () => {
    let splitExpression = history.toString().replace(/,/g, "").split("-");
    setResult(+splitExpression[0] - +splitExpression[1]);
    setPrevExpression({
      one: +splitExpression[0],
      action: "-",
      two: +splitExpression[1],
    });
  }

   const plusAction = () => {
    let splitExpression = history.toString().replace(/,/g, "").split("+");
    setResult(+splitExpression[0] + +splitExpression[1]);
    setPrevExpression({
      one: +splitExpression[0],
      action: "+",
      two: +splitExpression[1],
    });
  }

   const multiplyAction = () => {
    let splitExpression = history.toString().replace(/,/g, "").split("*");
    setResult(+splitExpression[0] * +splitExpression[1]);
    setPrevExpression({
      one: +splitExpression[0],
      action: "*",
      two: +splitExpression[1],
    });
  }

   const divideAction = () => {
    let splitExpression = history.toString().replace(/,/g, "").split("/");
    setResult(+splitExpression[0] / +splitExpression[1]);
    setPrevExpression({
      one: +splitExpression[0],
      action: "/",
      two: +splitExpression[1],
    });
  }

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
        {dataButtons.map(({className, value}, i)=>{
          return(
            <Button key={i} 
            className={className} 
            onClick={(e) => clickHandler(e.target.value)} 
            value={value}>
                {value}
            </Button>
        )})}
      </ButtonsInner>
    </ButtonsContainer>
  );
};

export default ButtonsSection;
