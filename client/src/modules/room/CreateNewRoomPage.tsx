import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftCornerBlob } from "../../ui/blob/LeftCornerBlob";
import { RightCornerBlob } from "../../ui/blob/RightCornerBlob";
import { CreateNewRoomSection } from "../../ui/room/CreateNewRoomSection";

export interface CreateNewRoomPageProps { }

export const CreateNewRoomPage: React.FC<CreateNewRoomPageProps> = ({ }) => {
    return (
        <Box width="100vw" height="94.3vh">
            <LeftCornerBlob />
            <RightCornerBlob />
            <CreateNewRoomSection />
        </Box>
    )
}