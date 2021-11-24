import styled from "@emotion/styled";
import React from "react";

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const Wrapper = styled.div`
  text-align: center;
`;

const GlobalInfo: React.FunctionComponent<Props> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
  return (
    <Wrapper>
      <h1>글로벌 Covid-19 데이터</h1>
      <h3>신규 확진자: {newConfirmed} 명</h3>
      <h3>신규 사망자: {newDeaths} 명</h3>
      <h3>신규 회복완료자: {newRecovered} 명</h3>
      {/* <h3>Total Confirmed: </h3>
      <h3>Total Deaths: </h3>
      <h3>Total Recovered: </h3> */}
    </Wrapper>
  );
};

export default GlobalInfo;
