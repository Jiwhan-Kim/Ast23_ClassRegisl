import React from "react";
import styled from "styled-components";
import {RxHeart} from "react-icons/rx";

function SelectBtn({ onClick }) {
  return (
    <Btn onClick={onClick}>
      <RxHeart /> 희망
    </Btn>
  );
}

export default SelectBtn;

const Btn = styled.div`
  width: 5.8rem;
  height: 5.3rem;
  cursor: pointer;
  border: 0.1rem solid #666;
  border-radius: 0.2rem;

color: #555;
font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
    font-weight: 700;
`;
