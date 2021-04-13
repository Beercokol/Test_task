import React from "react";
import { ChipsWrapper } from "./styles";
import { DedicatedField } from "../PlayField/types";
import { Chip } from "./Chip/Chip";

type ChipsProps = {
  dedicatedFields: DedicatedField[];
};

export const ChipsContainer: React.FC<ChipsProps> = ({ dedicatedFields }) => {
  return (
    <ChipsWrapper>
      {dedicatedFields.map((el) => (
        <Chip key={el.i} field={el} />
      ))}
    </ChipsWrapper>
  );
};
