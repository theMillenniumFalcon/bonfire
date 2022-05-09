import { Flex } from "@chakra-ui/react";
import React from "react";
import { RoomBottomBarLeftIconGrp } from "./RoomBottomBarLeftIconGrp";
import { RoomBottomBarRightIconGrp } from "./RoomBottomBarRightIconGrp";

export interface RoomCardBottomBarProps { }

export const RoomCardBottomBar: React.FC<RoomCardBottomBarProps> = ({ }) => {
    return (
        <Flex p={4} alignItems="center" justifyContent="space-between" height="9%" backgroundColor="#242C37">
            <RoomBottomBarLeftIconGrp />
            <RoomBottomBarRightIconGrp />
        </Flex>
    )
}