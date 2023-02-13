import React, { useState } from "react";
import styled from "styled-components";
import {RxTriangleUp, RxTriangleRight} from "react-icons/rx";

const list0 = ["none", "none", <RxTriangleRight />, "펼치기"];
const list1 = ["flex", "block", <RxTriangleUp />, "접기"];

function Info() {
  const [open, setOpen] = useState(list1);
  return (
      <Container>
          <div style= {{width: "128rem"}}>
              <Infos>
              <Title>공지사항</Title>
              <Btn onClick={() => {
                  if (open[0] === "none") {
                      setOpen(list1);
                  } else {
                      setOpen(list0);
                  }
            }}>{open[2]} {open[3]}</Btn>
          </Infos>
          <InfoDiv style={{display: open[0]}}>
              <Pp>◈ 본 페이지는 연세대학교 시스템반도체공학과 프로그래밍 학회 Asterisk 2023에서 제작한 모의수강신청 사이트입니다.</Pp>
              <Pp>◈ 실제 수강신청 페이지와는 차이가 있을 수 있습니다.</Pp>
              <Pp>◈ 제작: 김지환 (시스템반도체공학과 21)</Pp>
          </InfoDiv>
          </div>
      </Container>
  )
}

export default Info;

const Container = styled.div`
  width: 100%;
  background-color: #08326B;
  color: #ffffff;
  
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Infos = styled.div`
    width: 128rem;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    
    display: flex;
    align-items: center;
`;
const Btn = styled.div`
    cursor: pointer;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    
    font-size: 1.3rem;
    font-weight: 700;
`;

const InfoDiv = styled.div`
     flex-direction: column;
     justify-content: flex-start;
     align-items: flex-start;
     margin-top: 1rem;
     
     border-top: 1px solid rgb(38, 80, 147);
     font-size: 1.4rem;
     font-weight: 400;
`;

const Pp = styled.p`
    margin-top: 1rem;
`;