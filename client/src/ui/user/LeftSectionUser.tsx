import { Flex } from "@chakra-ui/react";
import React from "react";
import { SectionContentAvatar } from "../user-avatar/SectionContentAvatar";
import { LeftSectionUserDetails } from "./LeftSectionUserDetails";

export interface LeftSectionUserProps { }

export const LeftSectionUser: React.FC<LeftSectionUserProps> = ({ }) => {
    return (
        <Flex align="center">
            <SectionContentAvatar htmlHeight="38px" htmlWidth="38px" marginRight="10px" />
            <LeftSectionUserDetails />
        </Flex>
    )
}