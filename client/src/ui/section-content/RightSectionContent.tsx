import { Box } from "@chakra-ui/react";
import React from "react";
import { UpcomingRoomsCard } from "../room/UpcomingRoomsCard";
import { RightSectionUserCard } from "../user/RightSectionUserCard";

export interface RightSectionContentProps { }

export const RightSectionContent: React.FC<RightSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <RightSectionUserCard />
            <UpcomingRoomsCard />
        </Box>
    )
}