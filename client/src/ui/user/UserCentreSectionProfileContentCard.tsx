import { Box } from "@chakra-ui/react";
import React from "react";
import { UserCentreSectionBanner } from "../user-banner/UserCentreSectionBanner";
import { UserCentreSectionUser } from "./UserCentreSectionUser";

export interface UserCentreSectionProfileContentCardProps { }

export const UserCentreSectionProfileContentCard: React.FC<UserCentreSectionProfileContentCardProps> = ({ }) => {
    return (
        <Box backgroundColor="#151A21" height="34vh" borderRadius="4px" width="100%" pos="relative">
            <UserCentreSectionBanner />
            <UserCentreSectionUser />
        </Box>
    )
}