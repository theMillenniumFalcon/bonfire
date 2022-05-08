import { Box } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { RoomCardHeader } from "./RoomCardHeader";

export interface CentreSectionRoomCardProps { }

export const CentreSectionRoomCard: React.FC<CentreSectionRoomCardProps> = ({ }) => {
    return (
        <Box backgroundColor="#151A21" borderRadius="4px" height="100%">
            <RoomCardHeader />
            <Horizontal 
                marginBottom="10px"
                marginTop="10px"
                width="100%"
                color="#242C37" 
                backgroundColor="#242C37"
            />
        </Box>
    )
}