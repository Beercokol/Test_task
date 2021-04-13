import React, { useState } from "react";
import { MainContainer } from "./styles";
import { PlayControls } from "../PlayControls/PlayControls";
import { PlayField } from "../PlayField/PlayField";

export const AppContainer: React.FC = () => {
  const [selectedRule, setSelectedRule] = useState<number>(5);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  return (
    <MainContainer>
      <PlayControls setSelectedRule={setSelectedRule} setPlaying={setPlaying} />
      <PlayField selectedRule={selectedRule} isPlaying={isPlaying} />
    </MainContainer>
  );
};
