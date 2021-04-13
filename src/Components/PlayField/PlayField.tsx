import React, { useEffect, useState } from "react";
import {
  FieldContainer,
  FieldSection,
  FieldWrapper,
  BoardWrapper,
} from "./styles";
import { ChipsContainer } from "../ChipsContainer/ChipsContainer";
import { DedicatedField } from "./types";
import { calcColField, calcRowField } from "../../tools/calcTools";

type PlayType = {
  selectedRule: number;
  isPlaying: boolean;
};

export const PlayField: React.FC<PlayType> = ({ selectedRule, isPlaying }) => {
  const [dedicatedFields, setDedicatedFields] = useState<DedicatedField[]>([]);
  const [fieldsArray, setFieldArray] = useState<{ isSelected: boolean }[]>(
    new Array(Math.pow(selectedRule, 2)).fill({ isSelected: false })
  );

  useEffect(() => {
    setFieldArray(
      new Array(Math.pow(selectedRule, 2)).fill({ isSelected: false })
    );
    setDedicatedFields([]);
  }, [selectedRule]);

  const fieldWidthValue = 450 / selectedRule - 2;

  const mutateFieldArray = (elemId: number) => {
    const itemIndex = fieldsArray.findIndex((_, index) => elemId === index);
    const newArray = [
      ...fieldsArray.slice(0, itemIndex),
      { isSelected: !fieldsArray[itemIndex].isSelected },
      ...fieldsArray.slice(itemIndex + 1),
    ];
    setFieldArray(newArray);
  };

  const colorFields = (el: React.MouseEvent<HTMLDivElement>) => {
    const elemId = Number((el.target as HTMLDivElement).id);
    const col = calcColField(elemId, selectedRule);
    const row = calcRowField(elemId, selectedRule);
    if (dedicatedFields.find((elem) => elem.i === elemId)) {
      setDedicatedFields(dedicatedFields.filter((elem) => elem.i !== elemId));
      mutateFieldArray(elemId);
    } else {
      setDedicatedFields([
        ...dedicatedFields,
        { col: col, row: row, i: elemId },
      ]);
      mutateFieldArray(elemId);
    }
  };

  return (
    <>
      {isPlaying && (
        <FieldWrapper>
          <BoardWrapper>
            <FieldContainer fieldQuantity={selectedRule}>
              {fieldsArray.map((el, i) => (
                <FieldSection
                  fieldWidth={fieldWidthValue}
                  isSelected={el.isSelected}
                  onMouseEnter={(e) => colorFields(e)}
                  key={i}
                  id={String(i)}
                />
              ))}
            </FieldContainer>
          </BoardWrapper>
          <ChipsContainer dedicatedFields={dedicatedFields} />
        </FieldWrapper>
      )}
    </>
  );
};
