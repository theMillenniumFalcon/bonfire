import { Box } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { UpcomingRoom } from "./UpcomingRoom";

interface UpcomingRoomsContentProps { }

export const UpcomingRoomsContent: React.FC<UpcomingRoomsContentProps> = ({ }) => {
    return (
        <Box backgroundColor="#151A21" height="80%">
            <UpcomingRoom />
            <Horizontal marginBottom="0px" marginTop="0px" width="100%" color="#242C37" backgroundColor="#242C37" />
            <UpcomingRoom />
            <Horizontal marginBottom="0px" marginTop="0px" width="100%" color="#242C37" backgroundColor="#242C37" />
            <UpcomingRoom />
        </Box>
    )
}