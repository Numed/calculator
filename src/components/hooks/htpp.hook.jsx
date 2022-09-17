import { useState, useContext } from "react";
import { MyContext } from "../contexts/Context";

export const useCustomHooks = () => {
    const [history, setHistory] = useState([]);
    const { setResult, setPrevExpression } = useContext(MyContext);
    
      const minusAction = (duplicate) => {
        let splitExpression = history.toString().replace(/,/g, "").split("-");
        const expression = +splitExpression[0] - +splitExpression[1];
        setResult(expression);
        setPrevExpression({
          one: +splitExpression[0],
          action: "-",
          two: +splitExpression[1],
        });
        duplicate !== undefined ? setHistory([expression, duplicate]) : setHistory([expression]);
      }
    
       const plusAction = (duplicate) => {
        let splitExpression = history.toString().replace(/,/g, "").split("+");
        const expression = +splitExpression[0] + +splitExpression[1];
        setResult(expression);
        setPrevExpression({
          one: splitExpression[0],
          action: "+",
          two: splitExpression[1],
        });
        duplicate !== undefined ? setHistory([expression, duplicate]) : setHistory([expression]);
      }
    
       const multiplyAction = (duplicate) => {
        let splitExpression = history.toString().replace(/,/g, "").split("*");
        const expression = +splitExpression[0] * +splitExpression[1];
        setResult(expression);
        setPrevExpression({
          one: +splitExpression[0],
          action: "*",
          two: +splitExpression[1],
        });
        duplicate !== undefined ? setHistory([expression, duplicate]) : setHistory([expression]);
      }
    
        const divideAction = (duplicate) => {
        let splitExpression = history.toString().replace(/,/g, "").split("/");
        const expression = +splitExpression[0] / +splitExpression[1];
        setResult(expression);
        setPrevExpression({
          one: +splitExpression[0],
          action: "/",
          two: +splitExpression[1],
        });
        duplicate !== undefined ? setHistory([expression, duplicate]) : setHistory([expression]);
      }

      return {divideAction, multiplyAction, plusAction, minusAction, history, setHistory}
};