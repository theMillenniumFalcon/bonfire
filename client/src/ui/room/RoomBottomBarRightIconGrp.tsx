import { Flex } from "@chakra-ui/react";
import React from "react";
import { LeaveRoom } from "../icon/LeaveRoom";

export interface RoomBottomBarRightIconGrpProps { }

export const RoomBottomBarRightIconGrp: React.FC<RoomBottomBarRightIconGrpProps> = ({ }) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" backgroundColor="#242C37">
            <LeaveRoom />
        </Flex>
    )
}