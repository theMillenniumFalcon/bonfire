import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { UserCentreSectionContent } from "../section-content/UserCentreSectionContent";

export interface UserCentreProps { }

export const UserCentre: React.FC<UserCentreProps> = ({ }) => {
  return (
    <Box>
      <MainSearchBar />
      <UserCentreSectionContent />
    </Box>
  )
}
