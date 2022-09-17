import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vh;
  position: relative;
  @media screen and (max-width: 950px) {
    height: 100%;
  }
`;

export const ContainerInner = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33.3%;
  margin: 20px 0;
  background-color: #ffffff;
  height: 100%;
  border-radius: 40px;
  padding-top: 40px;

  @media (max-width: 950px) {
    width: 50%;
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
  }

  @media (max-width: 650px) {
    width: 70%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f9f9f9;
  width: 35%;
  margin: 0 auto;
  border-radius: 20px;
`;

export const ThemeInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ThemeButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &.active {
    filter: invert(1);
    transition: all 0.15s linear;
  }
`;

export const ImgIcon = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const ResultSection = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding-right: 20px;
`;

export const PrevExpression = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25em;
  color: #43484e;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Action = styled.span`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25em;
  color: #da6a6a;
  margin: 0 auto;
  padding: 0 5px;
`;

export const Result = styled.span`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2em;
  margin-top: 5px;
  color: #43484e;
`;
