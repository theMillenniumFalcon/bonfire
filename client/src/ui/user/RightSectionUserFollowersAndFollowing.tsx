import { Flex } from "@chakra-ui/react";
import React from "react";
import { Followers } from "../Followers";
import { Following } from "../Following";

export interface RightSectionUserFollowersAndFollowingProps { }

export const RightSectionUserFollowersAndFollowing: React.FC<RightSectionUserFollowersAndFollowingProps> = ({ }) => {
    return (
        <Flex align="center" backgroundColor="#151A21" marginTop="5px" marginBottom="5px">
            <Followers />
            <Following />
        </Flex>
    )
}