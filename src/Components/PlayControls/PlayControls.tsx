import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { PlayButton, PlayContainer, Select } from "./style";
import { RuleType } from "../AppContainer/types";
import { fetchRules } from "../../api";

type TypeProps = {
  setSelectedRule: (quantity: number) => void;
  setPlaying: (isPlaying: boolean) => void;
};

export const PlayControls: React.FC<TypeProps> = ({
  setSelectedRule,
  setPlaying,
}) => {
  const [playRules, setPlayRules] = useState<[string, RuleType][]>();

  useEffect(() => {
    fetchRules<RuleType[] | string>("https://demo1030918.mockable.io/")
      .then((res) => setPlayRules(Object.entries(res)))
      .catch((e) => console.log(e));
  }, []);

  const setSelectedRuleCallback = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedRule(Number(e.target.value));
    },
    [setSelectedRule]
  );

  return (
    <PlayContainer>
      <Select onChange={setSelectedRuleCallback}>
        {playRules &&
          playRules.map(([value, field]) => (
            <option key={value} value={field.field}>
              {value}
            </option>
          ))}
      </Select>
      <PlayButton onClick={() => setPlaying(true)}>Play</PlayButton>
    </PlayContainer>
  );
};
