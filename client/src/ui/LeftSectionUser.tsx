import { Flex } from "@chakra-ui/react";
import React from "react";
import { LeftSectionContentAvatar } from "./userAvatar/LeftSectionContentAvatar";
import { LeftSectionUserDetails } from "./LeftSectionUserDetails";

export interface LeftSectionUserProps { }

export const LeftSectionUser: React.FC<LeftSectionUserProps> = ({ }) => {
    return (
        <Flex align="center">
            <LeftSectionContentAvatar />
            <LeftSectionUserDetails />
        </Flex>
    )
}