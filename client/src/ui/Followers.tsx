import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardUserText } from "./StandardUserText";

export interface FollowersProps { }

export const Followers: React.FC<FollowersProps> = ({ }) => {
    return (
        <Flex align="center" marginRight="30px" backgroundColor="#151A21">
            <StandardUserText
                backgroundColor="#151A21"
                fontSize="md"
                color="#ffffff"
                fontWeight="500"
                marginRight="8px"
            >
                0
            </StandardUserText>
            <StandardUserText
                backgroundColor="#151A21"
                fontSize="md"
                color="#5D7290"
                fontWeight="450"
            >
                followers
            </StandardUserText>
        </Flex>
    )
}