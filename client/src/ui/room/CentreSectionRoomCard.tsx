import { Box } from "@chakra-ui/react";
import React from "react";
import { Horizontal } from "../Horizontal";
import { RoomCardBottomBar } from "./RoomCardBottomBar";
import { RoomCardHeader } from "./RoomCardHeader";
import { RoomCardMembers } from "./RoomCardMembers";

export interface CentreSectionRoomCardProps { }

export const CentreSectionRoomCard: React.FC<CentreSectionRoomCardProps> = ({ }) => {
    return (
        <Box backgroundColor="#151A21" borderRadius="4px" height="100%">
            <RoomCardHeader />
            <Horizontal 
                marginBottom="0px"
                marginTop="0px"
                width="100%"
                color="#242C37" 
                backgroundColor="#242C37"
            />
            <RoomCardMembers />
            <RoomCardBottomBar />
        </Box>
    )
}