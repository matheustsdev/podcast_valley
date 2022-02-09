import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface StyledRangeProps extends InputHTMLAttributes<Range> {
  position?: number;
}

interface StyledDisabledProps {
  disabled: boolean;
}

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
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;

  svg {
    font-size: 1rem;
    color: white;
  }
`;

export const PauseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--purple-dark);
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;

  svg {
    font-size: 1.75rem;
    color: white;
  }
`;

export const TimerControl = styled.div<StyledDisabledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 282px;

  font-size: 0.875rem;
  font-family: "inter";
  color: var(--text-body-3);

  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

export const AudioTrack = styled.input<StyledRangeProps>`
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
    z-index: 3;
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
    width: ${(props) => (props.position ? props.position * 174 : 0)}px;
    height: 4px;
    position: absolute;
    background: #04d361;
    align-self: center;
    z-index: 1;
  }
`;

export const ButtonsContainer = styled.div<StyledDisabledProps>`
  width: 256px;
  display: flex;
  justify-content: space-around;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  button {
    border: none;
  }

  .audioControl {
    background: transparent;
    color: white;
    font-size: 1rem;
  }
`;
