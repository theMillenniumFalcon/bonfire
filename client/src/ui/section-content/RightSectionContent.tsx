import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { UpcomingRoomsCard } from "../room/UpcomingRoomsCard";
import { RightSectionUserCard } from "../user/RightSectionUserCard";

export interface RightSectionContentProps { }

export const RightSectionContent: React.FC<RightSectionContentProps> = ({ }) => {
    const router = useRouter()
    const explore = ((router.asPath.split('/')[1]) as unknown) as string
    return (
        <Box marginTop={12}>
            <RightSectionUserCard />
            {!(String(explore) === "explore") ? (
                <UpcomingRoomsCard />
            ) : null}
        </Box>
    )
}