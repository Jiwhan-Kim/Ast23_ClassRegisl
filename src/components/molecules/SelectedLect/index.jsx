import React, { useState } from "react";
import styled from "styled-components";
// components
import TrHeadForSL from "../../atoms/TrHeadForSL";
import DeleteBtn from "../../atoms/DeleteBtn";
import EnrollBtn from "../../atoms/EnrollBtn";
import ModalTime from "../../atoms/ModalTime";

function SelectedLect({ lecture, selectLect, enrollLect, StartTime }) {
  const [modal1Open, setModal1Open] = useState(false);
  const openModal1 = () => {
    setModal1Open(true);
  };
  const closeModal1 = () => {
    setModal1Open(false);
  };
  function ListBox({ list, no, num, name, point, prof, time, place, remain }) {
    return (
      <Tr>
          <Td style={{width:"3.9rem"}}>{list}</Td>
        <Td style={{ width: "6.3rem" }}>
          <DeleteBtn
            onClick={() => {
              selectLect(no - 1, 0);
            }}
          />
        </Td>
          <Td style={{width: "9.9rem"}}>
              {num.charAt(3)}000
          </Td>
        <Td style={{width: "15.9rem"}}>
              <div
                style={{width: "100%", height: "50%", borderBottom: "0.1rem solid #e3e3e3", display: "flex", alignItems: "center", justifyContent: "center",}}
              >
                  {num}
              </div>
              <div style={{width: "100%", height: "50%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around",}}
              >
                <ImgBox1 src="newIm/ico_sort01.png" />
                  <ImgBox1 src="newIm/ico_sort02.png" />
                  <ImgBox1 src="newIm/ico_sort03.png" />
                  <ImgBox1 src="newIm/ico_sort05.png" />

              </div>
          </Td>
          <Td style={{ width: "4.9rem" }}>{point}</Td>
          <Td style={{ width: "6.5rem" }}>
            <EnrollBtn
                onClick={() => {
                    enrollLect(no - 1, 1);
                openModal1();
            }}
            />
          </Td>
        <Td style={{ width: "26.4rem" }}>
          {name}
        </Td>

        <Td style={{ width: "14.9rem" }}>{prof}</Td>
        <Td style={{ width: "14.9rem" }}>{time}</Td>
        <Td style={{ width: "14.9rem" }}>{place}</Td>
          <Td style={{width: "4.9rem"}}>-</Td>
          <Td style={{width: "6.9rem"}}>-</Td>
          <Td style={{width: "28.9rem"}}>-</Td>
        <Td style={{ width: "4.9rem" }}>{remain}</Td>
        <Td style={{ width: "4.9rem" }}>-</Td>
          <Td style={{width: "20.9rem"}}>-</Td>
          <Td style={{width: "7.4rem"}}>-</Td>
      </Tr>
    );
  }
  const tempArray = [];
  for (let i = 0; i < lecture.length; i++) {
    if (lecture[i][8] === 1) {
      tempArray.push(lecture[i]);
    }
  }
  const ListItems = tempArray.map((array, index) => (
    <ListBox
      key={index}
      list={index}
      no={array[0]}
      num={array[1]}
      name={array[2]}
      point={array[3]}
      prof={array[4]}
      time={array[5]}
      place={array[6]}
      remain={array[7]}
    />
  ));

  return (
    <OutLineBox>
      <ModalTime open={modal1Open} close={closeModal1} StartTime={StartTime} />
      <TitleBox style = {{fontSize: "1.5rem", fontWeight: "700"}}>
          희망과목 목록
          <div style ={{width: "2rem"}} />
        <ExplainBox style={{color: "#FF0000"}}>
          <ImgBox1 src="newIm/ico_sort01.png" />
          동일교과목
        </ExplainBox>
        <ExplainBox style={{color: "#C80202"}}>
          <ImgBox1 src="newIm/ico_sort02.png" />
          교과목개요
        </ExplainBox>
        <ExplainBox style={{color: "#030E79"}}>
          <ImgBox1 src="newIm/ico_sort03.png" />
          수업계획서
        </ExplainBox>
        <ExplainBox style={{color: "#0000FF"}}>
          <ImgBox1 src="newIm/ico_sort05.png" />
          마일리지 결과
        </ExplainBox>
      </TitleBox>
        <div style={{width: "100%", overflowX: "auto"}}>
            <table style={{ marginTop: "1rem" }}>
                <thead style={{display: "inline-table" }}>
                    <TrHeadForSL />
                </thead>
                <div style = {{overflowX: "hidden", width: "100%", height: "30rem", overflowY: "auto"}}>
                    <tbody>
                        {ListItems}
                    </tbody>
                </div>
            </table>
        </div>
    </OutLineBox>
  );
}

export default SelectedLect;

const OutLineBox = styled.div`
  margin-top: 1rem;
  font-size: 1.35rem;
`;
const Tr = styled.tr`
  font-size: 1.3rem;
  border-right: 0.05rem solid #e3e3e3;
  display: flex;
`;
const Td = styled.td`
  max-height: 5.9rem;
  height: 5.9rem;
  border-left: 0.05rem solid #e3e3e3;
  border-bottom: 0.05rem solid #e3e3e3;
  white-space: pre-line;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgBox1 = styled.img`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;
const ExplainBox = styled.div`
  display: flex;
  margin-right: 0.7rem;
  width: 10%;
  font-size: 1.3rem;
  font-weight: 700;
  align-items: flex-end;
`;
const TitleBox = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
