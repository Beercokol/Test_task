import styled from "styled-components";

export const PlayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  border: 1px solid grey;
  min-height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PlayButton = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  font-weight: 700;
  background-color: blue;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 150px;
  height: 35px;
  color: white;
  font-weight: 700;
  background-color: blue;
  border-radius: 5px;
`;
