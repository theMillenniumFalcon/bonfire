import React from "react";
import { Flex } from "@chakra-ui/react";
import { StandardRoomText } from "../StandardRoomText";

export interface LeaveRoomProps { }

export const LeaveRoom: React.FC<LeaveRoomProps> = ({ }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="35px"
            width="120px"
            borderRadius='2px'
            backgroundColor="#0B0E11"
            mr={3}
            color="#ffffff"
            cursor="pointer"
        >
            <StandardRoomText color="#ffffff" fontSize="15px" fontWeight="bold">
                Leave
            </StandardRoomText>
        </Flex>
    )
}