import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { DashboardCentreSectionContent } from "../section-content/DashboardCentreSectionContent";

export interface DashboardCentreHeaderProps { }

export const DashboardCentreHeader: React.FC<DashboardCentreHeaderProps> = ({ }) => {
  return (
    <Box height="40px">
      <MainSearchBar />
      <DashboardCentreSectionContent />
    </Box>
  )
}
