import React from "react";
import styled from "styled-components";

function TrHeadForOL() {
  return (
    <TrHead>
        <TdHead style={{ width: "3.9rem" }}>순번</TdHead>
        <TdHead style={{ width: "6.4rem" }}>
        희망
        </TdHead>
        <TdHead style={{width: "5.9rem"}}>캠퍼스</TdHead>
        <TdHead style={{ width: "4.9rem" }}>학년</TdHead>
        <TdHead style={{width: "6.9rem"}}>단위</TdHead>
        <TdHead style={{ width: "15.9rem", flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            height: "50%",
            borderBottom: "0.1rem solid #e3e3e3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          학정번호-분반-실습
        </div>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>동일</div>
          <div>개요</div>
          <div>계획</div>
          <div>마일</div>
        </div>
      </TdHead>
        <TdHead style={{ width: "4.9rem" }}>학점</TdHead>
      <TdHead style={{ width: "6.5rem" }}>신청</TdHead>
      <TdHead style={{ width: "26.4rem" }}>교과목</TdHead>
      <TdHead style={{ width: "14.9rem" }}>담당교수</TdHead>
      <TdHead style={{ width: "14.9rem" }}>강의시간</TdHead>
      <TdHead style={{ width: "14.9rem" }}>강의실</TdHead>
        <TdHead style={{ width: "4.9rem" }}>언어</TdHead>
        <TdHead style={{ width: "6.9rem" }}>평가<br />방식</TdHead>
        <TdHead style={{ width: "28.9rem" }}>기타유의사항</TdHead>
        <TdHead style={{ width: "4.9rem" }}>정원</TdHead>
        <TdHead style={{ width: "4.9rem" }}>전공자<br />정원</TdHead>
      <TdHead style={{ width: "20.9rem", flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            height: "50%",
            borderBottom: "0.1rem solid #e3e3e3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          학년별 잔여석
        </div>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
      </TdHead>
      <TdHead style={{ width: "7.4rem" }}>
        Max
        <br />
        Mileage
      </TdHead>
    </TrHead>
  );
}

export default TrHeadForOL;

const TrHead = styled.tr`
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  border-right: 0.05rem solid #e3e3e3;
  border-top: 0.1rem solid #c1c3c5;
`;
const TdHead = styled.th`
  border-left: 0.05rem solid #e3e3e3;
  border-bottom: 0.05rem solid #e3e3e3;
  height: 5.9rem;
  white-space: pre-line;

  display: flex;
  align-items: center;
  justify-content: center;
`;
