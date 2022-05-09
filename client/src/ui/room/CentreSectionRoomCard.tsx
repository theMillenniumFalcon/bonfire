import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Horizontal } from "../Horizontal";
import { RoomCardBottomBar } from "./RoomCardBottomBar";
import { RoomCardHeader } from "./RoomCardHeader";
import { RoomCardMembers } from "./RoomCardMembers";

export interface CentreSectionRoomCardProps { }

export const CentreSectionRoomCard: React.FC<CentreSectionRoomCardProps> = ({ }) => {
    const [visible, setVisible] = useState(true)
    const toggleVisibility = () => {
        setVisible(prevState => !prevState)
    }

    return (
        <Box backgroundColor="#151A21" borderRadius="4px" height="100%">
            <RoomCardHeader visible={visible} toggleVisbility={toggleVisibility} />
            <Horizontal
                marginBottom="0px"
                marginTop="0px"
                width="100%"
                color="#242C37"
                backgroundColor="#242C37"
            />
            {visible ? (<RoomCardMembers />) : null}
            <RoomCardBottomBar />
        </Box>
    )
}