import React from "react";
import styled from "styled-components";
import { RxDividerVertical } from "react-icons/rx";

function Header({ Init, setPage }) {
  return (
    <Head>
      <HeaderBox>
        <div
          style={{
            display: "flex", flexDirection: "row", alignItems: "center"
          }}
        >
          <ImgDiv />
          <TitleString style={{ fontSize: "1.8rem" }}>
            2023학년도 1학기 모의수강신청
          </TitleString>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

            <Texts>
                시스템반도체공학과
            </Texts>
            <RxDividerVertical />
            <Texts>
                김지환(2023189123)
            </Texts>
            <RxDividerVertical />
          <div style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => {
              Init();
              setPage(0);
          }}>
            <LogoutButton>로그아웃</LogoutButton>
          </div>
        </div>
      </HeaderBox>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  min-width: 128rem;
  height: 7rem;
  width: 100%;
  background-color: #ffffff;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgDiv = styled.div`
  background: url("newIm/logo.png");
  width: 18.8rem;
  height: 4.4rem;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 128rem;
`;
const TitleString = styled.div`
  color: #0C2960;
  font-size: 1.7rem;
  font-weight: 700;
  margin-right: 2rem;
  margin-left: 2rem;
`;
const LogoutButton = styled.td`
  width: 8.7rem;
  height: 2.4rem;
  border: 1px solid #4c4c4c;
  border-radius: 1.2rem;
  color: #000000;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Texts = styled.p`
    font-size: 1.4rem;
    color: #0C2960;
    font-weight: 700;
`;
