import { Box } from "@chakra-ui/react";
import React from "react";
import { RightSectionUser } from "./RightSectionUser";
import { RightSectionUserBio } from "./RightSectionUserBio";
import { RightSectionUserFollowersAndFollowing } from "./RightSectionUserFollowersAndFollowing";

export interface RightSectionUserCardProps { }

export const RightSectionUserCard: React.FC<RightSectionUserCardProps> = ({ }) => {
    return (
        <Box p={5} backgroundColor="#151A21" borderRadius="4px" height="25vh">
            <RightSectionUser />
            <RightSectionUserFollowersAndFollowing />
            <RightSectionUserBio />
        </Box>
    )
}