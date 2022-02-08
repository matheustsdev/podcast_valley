import styled from "styled-components";

export const Container = styled.div`
  width: 282px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9164fa;
  opacity: 0.7;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;

  svg {
    opacity: 0.7;
    font-size: 1rem;
    color: white;
  }
`;

export const TimerControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 282px;
  opacity: 0.7;

  font-size: 0.875rem;
  font-family: "inter";
  color: var(--text-body-3);
`;

export const AudioTrack = styled.input`
  -webkit-appearance: none;
  background: #9f75ff;
  width: 174px;
  height: 4px;
  border-radius: 2px;
  z-index: 5;

  &::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #04d361;
    margin-top: -1px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    // Empty source in audio tag -> disabled
    border: ${(props) => (props.disabled ? "none" : "4px solid #04d361")};
    background: ${(props) => (props.disabled ? "transparent" : "white")};
    position: relative;
    z-index: 10;
  }

  /** FF*/
  &::-moz-range-progress {
    background-color: #04d361;
  }
  &::-moz-range-track {
    background-color: #9f75ff;
  }
  /* IE*/
  &::-ms-fill-lower {
    background-color: #04d361;
  }
  &::-ms-fill-upper {
    background-color: #9f75ff;
  }

  &:after {
    content: "";
    width: ${(props) => Number(props.value) * 1.74}px;
    height: 4px;
    position: absolute;
    background: #04d361;
    align-self: center;
    overflow: hidden;
    z-index: 0;
  }
`;

export const ButtonsContainer = styled.div`
  width: 256px;
  display: flex;
  justify-content: space-around;
  button {
    border: none;
  }

  .audioControl {
    background: transparent;
    color: white;
    opacity: 0.7;
    font-size: 1rem;
  }
`;
