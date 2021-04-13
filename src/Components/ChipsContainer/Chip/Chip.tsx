import React from "react";
import { ChipContent } from "../styles";
import { DedicatedField } from "../../PlayField/types";

type ChipProps = {
  field: DedicatedField;
};

export const Chip: React.FC<ChipProps> = ({ field }) => {
  const { col, row } = field;
  return (
    <ChipContent>
      <label>
        col is {col} row is {row}
      </label>
    </ChipContent>
  );
};
