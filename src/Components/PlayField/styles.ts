import styled from "styled-components";

type FieldContainerProps = {
  fieldQuantity: number;
};

type FieldSectionProps = {
  isSelected: boolean;
  fieldWidth: number;
};

export const FieldSection = styled.div<FieldSectionProps>`
  width: ${(p) => p.fieldWidth + "px"};
  height: ${(p) => p.fieldWidth + "px"};
  border: 1px solid black;
  margin: 0;
  background-color: ${(p) => (p.isSelected ? "blue" : "white")};
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.fieldQuantity}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.fieldQuantity}, 1fr)`};
  min-width: 450px;
  width: 450px;
  height: 450px;
  min-height: 450px;
  border: 1px solid black;
  margin: auto;
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const BoardWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 70%;
`;
