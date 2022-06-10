import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { DeveloperCentreSectionContent } from "../section-content/DeveloperCentreSectionContent";

export interface DeveloperCentreProps { }

export const DeveloperCentre: React.FC<DeveloperCentreProps> = ({ }) => {
  return (
    <Box>
      <MainSearchBar />
      <DeveloperCentreSectionContent />
    </Box>
  )
}
