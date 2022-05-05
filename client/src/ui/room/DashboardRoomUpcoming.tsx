import { Flex } from "@chakra-ui/react";
import React from "react";
import { RoomHeader } from "./RoomHeader";

interface DashboardRoomUpcomingProps { }

export const DashboardRoomUpcoming: React.FC<DashboardRoomUpcomingProps> = ({ }) => {
    return (
        <Flex p={5} backgroundColor="#151A21" borderRadius="4px">
            <RoomHeader />
        </Flex>
    )
}