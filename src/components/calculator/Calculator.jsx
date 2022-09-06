import { useRef } from "react";
import moonImg from "../../img/themes/moon.svg";
import sunImg from "../../img/themes/sun.svg";
import ButtonsSection from "../buttonsSection/ButtonsSection";
import {
  Container,
  ContainerInner,
  ThemeButton,
  ThemeContainer,
  ThemeInner,
  PrevExpression,
  Action,
  Result,
  ResultSection,
  ImgIcon,
} from "./style";
import { MyContext } from "../context/Context";

const Calculator = () => {
  const result = useRef(),
    prevExpression = useRef(),
    sun = useRef(),
    moon = useRef();

  const activeTheme = (e) => {
    if (e.classList.contains("sun")) {
      moon.current.classList.remove("active");
      document.body.classList.remove("dark-mode");
      e.classList.add("active");
    } else {
      sun.current.classList.remove("active");
      e.classList.add("active");
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <Container>
      <ContainerInner className="container-inner">
        <ThemeContainer className="theme-container">
          <ThemeInner>
            <ThemeButton
              ref={sun}
              className="sun active"
              onClick={(e) => activeTheme(e.target)}
            >
              <ImgIcon src={sunImg} />
            </ThemeButton>
            <ThemeButton ref={moon} onClick={(e) => activeTheme(e.target)}>
              <ImgIcon src={moonImg} />
            </ThemeButton>
          </ThemeInner>
        </ThemeContainer>
        <ResultSection>
          <PrevExpression ref={prevExpression} className="prev-expression">
            308<Action>x</Action>42
          </PrevExpression>
          <Result className="result" ref={result}>
            12,936
          </Result>
        </ResultSection>
        <MyContext.Provider value={{ prevExpression, result }}>
          <ButtonsSection />
        </MyContext.Provider>
      </ContainerInner>
    </Container>
  );
};

export default Calculator;
