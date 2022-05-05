import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomCategories } from "../category/RoomCategories";
import { RoomHeader } from "./RoomHeader";
import { RoomMembers } from "./RoomMembers";

interface DashboardRoomDefaultProps { }

export const DashboardRoomDefault: React.FC<DashboardRoomDefaultProps> = ({ }) => {
    return (
        <Box p={5} backgroundColor="#151A21" borderRadius="4px">
            <RoomHeader />
            <RoomMembers />
            <RoomCategories />
        </Box>
    )
}