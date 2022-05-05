import { Stack } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { DashboardRoomDefault } from "./DashboardRoomDefault";
import { DashboardRoomUpcoming } from "./DashboardRoomUpcoming";

interface RoomSectionProps { }

export const RoomSection: React.FC<RoomSectionProps> = ({ }) => {
    return (
        <Stack>
            <DashboardRoomUpcoming />
            <Horizontal />
            <DashboardRoomDefault />
        </Stack>
    )
}