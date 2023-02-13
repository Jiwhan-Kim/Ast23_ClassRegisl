import React from "react";
import styled from "styled-components";
import {RxPencil1} from "react-icons/rx"

function EnrollBtn({ onClick }) {
  return <Btn onClick={onClick}><RxPencil1 />신청</Btn>;
}

export default EnrollBtn;

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
