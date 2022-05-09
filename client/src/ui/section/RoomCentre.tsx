import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { RoomCentreSectionContent } from "../section-content/RoomCentreSectionContent";

export interface RoomCentreProps { }

export const RoomCentre: React.FC<RoomCentreProps> = ({ }) => {
  return (
    <Box>
      <MainSearchBar />
      <RoomCentreSectionContent />
    </Box>
  )
}
