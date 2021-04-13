import styled from "styled-components";

export const ChipsWrapper = styled.div`
  width: 20%;
  height: 100%;
  max-height: 450px;
  min-height: 450px;
  max-width: 200px;
  background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  border-radius: 15px;
`;

export const ChipContent = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 130px;
  height: 20px;
  align-items: center;
  display: flex;
  background: wheat;
  border-radius: 5px;
`;
