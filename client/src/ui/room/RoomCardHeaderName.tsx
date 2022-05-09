import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardRoomText } from "../StandardRoomText";

export interface RoomCardHeaderNameProps {
    visible: boolean;
    toggleVisibility: any;
}

export const RoomCardHeaderName: React.FC<RoomCardHeaderNameProps> = ({ visible, toggleVisibility }) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" backgroundColor="#151A21">
            <StandardRoomText color="#ffffff" fontWeight="bold" fontSize="lg" backgroundColor="#151A21">
                Chill talks
            </StandardRoomText>
            {visible ? (
                <ChevronUpIcon
                    width="25px"
                    height="25px"
                    color="#ffffff"
                    backgroundColor="#151A21"
                    cursor="pointer"
                    onClick={toggleVisibility}
                />
            ) : (
                <ChevronDownIcon
                    width="25px"
                    height="25px"
                    color="#ffffff"
                    backgroundColor="#151A21"
                    cursor="pointer"
                    onClick={toggleVisibility}
                />
            )}
        </Flex>
    )
}