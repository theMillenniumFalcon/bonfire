import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftCornerBlob } from "../../ui/blob/LeftCornerBlob";
import { RightCornerBlob } from "../../ui/blob/RightCornerBlob";
import { InviteRoomSection } from "../../ui/room/InviteRoomSection";

export interface InviteRoomPageProps { }

export const InviteRoomPage: React.FC<InviteRoomPageProps> = ({ }) => {
    return (
        <Box width="100vw" height="94.3vh">
            <LeftCornerBlob />
            <RightCornerBlob />
            <InviteRoomSection />
        </Box>
    )
}