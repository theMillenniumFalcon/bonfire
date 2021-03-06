import { Box } from "@chakra-ui/react";
import React from "react";
import { UserCentre } from "../../ui/section/UserCentre";

export interface UserCentreSectionProps { }

export const UserCentreSection: React.FC<UserCentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <UserCentre />
        </Box>
    )
}