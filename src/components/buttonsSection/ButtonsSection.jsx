import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import divide from "../../img/imgIcons/divide.svg";
import remove from "../../img/imgIcons/remove.svg";
import plusOrMinus from "../../img/imgIcons/plusOrMinus.svg";
import { MyContext } from "../context/Context";

const ButtonsContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f7f7f7;
  border-radius: 20px;
`;

const ButtonsInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #43484e;
  height: 62px;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.green {
    color: #53b7a9 !important;
  }

  &.red {
    color: #b4676b !important;
  }
`;

const Icons = styled.img`
  pointer-events: none;
  width: 30px;

  &.green {
    filter: invert(59%) sepia(75%) saturate(267%) hue-rotate(122deg)
      brightness(95%) contrast(89%);
  }

  &.red {
    filter: invert(56%) sepia(7%) saturate(2445%) hue-rotate(308deg)
      brightness(82%) contrast(99%);
    width: 20px;
  }
`;

const ButtonsSection = () => {
  const [history, setHistory] = useState([]);
  const { result, prevExpression } = useContext(MyContext);
  const resultText = result.current;

  useEffect(() => {
    setExpression();
  }, [history]);

  const clearAll = () => {
    result.current.textContent = 0;
    prevExpression.current.classList.add("hidden");
    history.length = 0;
  };

  const setMinus = () => {
    const textToArray = Array.from(result.current.textContent);
    if (result.current.textContent.startsWith("-")) {
      textToArray.shift("-");
    } else {
      textToArray.unshift("-");
    }
    const text = textToArray.toString().replace(/,/g, "");
    result.current.textContent = text;
  };

  const removeLastAction = () => {
    const removeLastAction = result.current.textContent.slice(0, -1);
    if (result.current.textContent.length !== 1) {
      result.current.textContent = removeLastAction;
      history.pop();
    } else if (result.current.textContent === "-") {
      result.current.textContent = 0;
    } else {
      result.current.textContent = 0;
      history.pop();
    }
  };

  const clickHandler = (e) => {
    if (e !== "00" && result.current.textContent !== 0) {
      setHistory([...history, e]);
    }
  };

  const setExpression = () => {
    const expression = history.toString().replace(/,/g, "");
    result.current.textContent = expression;
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
        >
          <Icons className="red" src={divide} alt="divide" />
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value="1"
        >
          1
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value="2"
        >
          2
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value="3"
        >
          3
        </Button>
        <Button className="red" onClick={(e) => clickHandler(e.target.value)}>
          x
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"4"}
        >
          4
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"5"}
        >
          5
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"6"}
        >
          6
        </Button>
        <Button
          className="button red"
          onClick={(e) => clickHandler(e.target.value)}
        >
          +
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"7"}
        >
          7
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"8"}
        >
          8
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"9"}
        >
          9
        </Button>
        <Button
          className="button red"
          onClick={(e) => clickHandler(e.target.value)}
          value={"-"}
        >
          -
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"."}
        >
          .
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"0"}
        >
          0
        </Button>
        <Button
          className="button"
          onClick={(e) => clickHandler(e.target.value)}
          value={"00"}
        >
          00
        </Button>
        <Button
          className="button red"
          onClick={(e) => clickHandler(e.target.value)}
        >
          =
        </Button>
      </ButtonsInner>
    </ButtonsContainer>
  );
};

export default ButtonsSection;
