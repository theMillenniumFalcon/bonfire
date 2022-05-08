import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomCardHeaderCreator } from "./RoomCardHeaderCreator";
import { RoomCardHeaderDesc } from "./RoomCardHeaderDesc";
import { RoomCardHeaderName } from "./RoomCardHeaderName";

export interface RoomCardHeaderProps { }

export const RoomCardHeader: React.FC<RoomCardHeaderProps> = ({ }) => {
    return (
        <Box p={4} height="17%" backgroundColor="#151A21">
            <RoomCardHeaderName />
            <RoomCardHeaderCreator />
            <RoomCardHeaderDesc />
        </Box>
    )
}