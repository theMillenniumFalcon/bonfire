import { Flex } from "@chakra-ui/react";
import React from "react";
import { AddUserstoRoom } from "../icon/AddUserstoRoom";
import { Headphone } from "../icon/Headphone";
import { Microphone } from "../icon/Microphone";

export interface RoomBottomBarLeftIconGrpProps { }

export const RoomBottomBarLeftIconGrp: React.FC<RoomBottomBarLeftIconGrpProps> = ({ }) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" backgroundColor="#242C37">
            <Microphone />
            <Headphone />
            <AddUserstoRoom />
        </Flex>
    )
}