import React from "react";
import { StandardRoomText } from "../StandardRoomText";

export interface RoomCardHeaderCreatorProps { }

export const RoomCardHeaderCreator: React.FC<RoomCardHeaderCreatorProps> = ({ }) => {
    return (
        <StandardRoomText
            color="#ffffff"
            marginBottom="10px"
            marginTop="5px"
            fontWeight="450"
            fontSize="xs"
            backgroundColor="#151A21"
        >
            Tobey Maguire
        </StandardRoomText>
    )
}