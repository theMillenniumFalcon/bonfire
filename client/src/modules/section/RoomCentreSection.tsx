import { Box } from "@chakra-ui/react";
import React from "react";
import { RoomCentre } from "../../ui/section/RoomCentre";

export interface RoomCentreSectionProps { }

export const RoomCentreSection: React.FC<RoomCentreSectionProps> = ({ }) => {
    return (
        <Box w="50%" paddingLeft={2} paddingRight={2}>
            <RoomCentre />
        </Box>
    )
}