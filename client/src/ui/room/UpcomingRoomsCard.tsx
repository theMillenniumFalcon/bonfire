import { Box } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { UpcomingRoomsExplore } from "./UpcomingRoomsExplore";
import { UpcomingRoomsHeader } from "./UpcomingRoomsHeader";
import { UpcomingRoomsContent } from "./UpcominRoomsContent";

interface UpcomingRoomsCardProps { }

export const UpcomingRoomsCard: React.FC<UpcomingRoomsCardProps> = ({ }) => {
    return (
        <Box backgroundColor="#151A21" borderRadius="4px" height="50vh" marginTop={6}>
            <UpcomingRoomsHeader />
            <Horizontal marginBottom="0px" marginTop="0px" width="100%" color="#242C37" backgroundColor="#242C37" />
            <UpcomingRoomsContent />
            <UpcomingRoomsExplore />
        </Box>
    )
}