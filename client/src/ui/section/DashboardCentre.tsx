import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { DashboardCentreSectionContent } from "../section-content/DashboardCentreSectionContent";

export interface DashboardCentreProps { }

export const DashboardCentre: React.FC<DashboardCentreProps> = ({ }) => {
  return (
    <Box height="40px">
      <MainSearchBar />
      <DashboardCentreSectionContent />
    </Box>
  )
}
