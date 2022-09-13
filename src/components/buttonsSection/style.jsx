import styled from "styled-components";

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f7f7f7;
  border-radius: 20px;
`;

export const ButtonsInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.button`
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

  @media screen and (max-width: 325px) {
    font-size: 24px;
    line-height: 32px;
  }

  &.green {
    color: #53b7a9 !important;
  }

  &.red {
    color: #b4676b !important;
  }
`;

export const Icons = styled.img`
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