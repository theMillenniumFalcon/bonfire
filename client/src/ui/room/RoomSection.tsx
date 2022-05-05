import { Stack } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { DashboardRoomUpcoming } from "./DashboardRoomUpcoming";

interface RoomSectionProps { }

export const RoomSection: React.FC<RoomSectionProps> = ({ }) => {
    return (
        <Stack spacing={8} marginTop={10}>
            <DashboardRoomUpcoming />
            <Horizontal />
        </Stack>
    )
}