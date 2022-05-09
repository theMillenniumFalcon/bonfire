import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomCardHeaderCreator } from "./RoomCardHeaderCreator";
import { RoomCardHeaderDesc } from "./RoomCardHeaderDesc";
import { RoomCardHeaderName } from "./RoomCardHeaderName";

export interface RoomCardHeaderProps {
    visible: boolean;
    toggleVisbility: any;
}

export const RoomCardHeader: React.FC<RoomCardHeaderProps> = ({ visible, toggleVisbility }) => {
    return (
        <Box p={4} height="17%" backgroundColor="#151A21" marginBottom="10px">
            <RoomCardHeaderName visible={visible} toggleVisibility={toggleVisbility} />
            <RoomCardHeaderCreator />
            <RoomCardHeaderDesc />
        </Box>
    )
}