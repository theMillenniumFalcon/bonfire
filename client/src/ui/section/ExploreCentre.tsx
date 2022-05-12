import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { ExploreCentreSectionContent } from "../section-content/ExploreCentreSectionContent";

export interface ExploreCentreProps { }

export const ExploreCentre: React.FC<ExploreCentreProps> = ({ }) => {
  return (
    <Box>
      <MainSearchBar />
      <ExploreCentreSectionContent />
    </Box>
  )
}
