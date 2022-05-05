import { Flex } from "@chakra-ui/react";
import React from "react";
import { SectionContentAvatar } from "../userAvatar/SectionContentAvatar";
import { RightSectionUserDetails } from "./RightSectionUserDetails";

export interface RightSectionUserProps { }

export const RightSectionUser: React.FC<RightSectionUserProps> = ({ }) => {
    return (
        <Flex align="center" backgroundColor="#151A21">
            <SectionContentAvatar htmlHeight="45px" htmlWidth="45px" backgroundColor="#151A21" />
            <RightSectionUserDetails />
        </Flex>
    )
}