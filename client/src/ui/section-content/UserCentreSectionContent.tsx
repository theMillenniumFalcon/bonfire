import { Box } from "@chakra-ui/react";
import React from "react";
import { UserCentreSectionProfileContent } from "../user/UserCentreSectionProfileContent";

export interface UserCentreSectionContentProps { }

export const UserCentreSectionContent: React.FC<UserCentreSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <UserCentreSectionProfileContent />
        </Box>
    )
}