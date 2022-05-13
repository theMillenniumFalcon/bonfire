import { Box } from "@chakra-ui/react";
import React from "react";
import { StandardLink } from "../StandardLink";
import { StandardRoomText } from "../StandardRoomText";
import { UpcomingRoomUser } from "./UpcomingRoomUser";

interface UpcomingRoomProps { }

export const UpcomingRoom: React.FC<UpcomingRoomProps> = ({ }) => {
    return (
        <Box p={3} backgroundColor="#151A21" height="32.8%">
            <StandardRoomText color="#FD4D4D" fontSize="12px" fontWeight="600" backgroundColor="#151A21">
                6TH MAY, 1:43 AM
            </StandardRoomText>
            <StandardRoomText marginTop="10px" marginBottom="10px" color="#ffffff" fontSize="14px" fontWeight="700" backgroundColor="#151A21">
                Developers hangout
            </StandardRoomText>
            <UpcomingRoomUser />
        </Box>
    )
}