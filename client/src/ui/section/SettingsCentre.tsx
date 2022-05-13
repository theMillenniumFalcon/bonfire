import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { SettingsCentreSectionContent } from "../section-content/SettingsCentreSectionContent";

export interface SettingsCentreProps { }

export const SettingsCentre: React.FC<SettingsCentreProps> = ({ }) => {
  return (
    <Box>
      <MainSearchBar />
      <SettingsCentreSectionContent />
    </Box>
  )
}
