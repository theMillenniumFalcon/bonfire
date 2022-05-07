import { Flex } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { StandardUserText } from "../StandardUserText";

export interface UserCentreSectionCardDividerProps { }

export const UserCentreSectionCardDivider: React.FC<UserCentreSectionCardDividerProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between" height="40px" width="65%" p={3} marginTop={4}>
            <StandardUserText color="#FD4D4D" fontWeight="600">
                About
                <Horizontal marginBottom="0px" marginTop="0px" width="100%" color="#FD4D4D" backgroundColor="#FD4D4D" />
            </StandardUserText>
        </Flex>
    )
}