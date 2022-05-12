import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { UserCentreSectionContent } from "../section-content/UserCentreSectionContent";

export interface SettingsCentreProps { }

export const SettingsCentre: React.FC<SettingsCentreProps> = ({ }) => {
  return (
    <Box>
      <MainSearchBar />
      <UserCentreSectionContent />
    </Box>
  )
}
