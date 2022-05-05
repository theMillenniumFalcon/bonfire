import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { CentreSectionContent } from "../section-content/CentreSectionContent";

export interface CentreHeaderProps { }

export const CentreHeader: React.FC<CentreHeaderProps> = ({ }) => {
  return (
    <Box height="40px">
      <MainSearchBar />
      <CentreSectionContent />
    </Box>
  )
}
