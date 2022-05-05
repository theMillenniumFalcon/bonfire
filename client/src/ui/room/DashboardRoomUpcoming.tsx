import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomCategories } from "../category/RoomCategories";
import { RoomHeader } from "./RoomHeader";
import { RoomMembers } from "./RoomMembers";

interface DashboardRoomUpcomingProps { }

export const DashboardRoomUpcoming: React.FC<DashboardRoomUpcomingProps> = ({ }) => {
    return (
        <Box p={5} backgroundColor="#151A21" borderRadius="4px" marginTop={8}>
            <RoomHeader />
            <RoomMembers />
            <RoomCategories />
        </Box>
    )
}