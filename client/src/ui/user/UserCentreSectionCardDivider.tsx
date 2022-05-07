import { Box } from "@chakra-ui/react";
import React from "react";

export interface UserCentreSectionCardDividerProps { }

export const UserCentreSectionCardDivider: React.FC<UserCentreSectionCardDividerProps> = ({ }) => {
    return (
        <Box height="35px" border="1px solid white" color="white">About</Box>
    )
}