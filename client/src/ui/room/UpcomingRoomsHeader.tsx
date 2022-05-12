import { AddIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { StandardRoomText } from "../StandardRoomText";
import { useRouter } from 'next/router'

interface UpcomingRoomsHeaderProps { }

export const UpcomingRoomsHeader: React.FC<UpcomingRoomsHeaderProps> = ({ }) => {
    const router = useRouter()
    return (
        <Flex align="center" justify="space-between" p={5} backgroundColor="#151A21" height="15%">
            <StandardRoomText
                color="#ffffff"
                backgroundColor="#151A21"
                fontSize="18px"
                fontWeight="bold">
                Upcoming Rooms
            </StandardRoomText>
            <AddIcon
                color="#ffffff"
                backgroundColor="#151A21"
                cursor="pointer"
                onClick={() => router.push('/create-new-room')}
            />
        </Flex>
    )
}