import React from "react";
import styled from "styled-components";
import {GrStatusDisabled} from "react-icons/gr";
import { FiX } from "react-icons/fi";
function DeleteBtn({ onClick }) {
  return (
    <Btn onClick={onClick}>
      <GrStatusDisabled />
        <div style={{width:"0.3rem"}}></div>삭제
    </Btn>
  );
}

export default DeleteBtn;

const Btn = styled.div`
  width: 5.9rem;
  height: 5.3rem;
  background-color: #ffffff;
  color: #555;
  font-size: 1.3rem;
  cursor: pointer;

border: 1px solid #666;
border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
