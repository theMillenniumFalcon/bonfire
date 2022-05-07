import { Box } from "@chakra-ui/react";
import React from "react";
import { MainSearchBar } from "../input-field/MainSearchBar";
import { UserCentreSectionContent } from "../section-content/UserCentreSectionContent";

export interface UserCentreHeaderProps { }

export const UserCentreHeader: React.FC<UserCentreHeaderProps> = ({ }) => {
  return (
    <Box height="40px">
      <MainSearchBar />
      <UserCentreSectionContent />
    </Box>
  )
}
