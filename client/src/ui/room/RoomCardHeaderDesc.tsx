import React from "react";
import { StandardRoomText } from "../StandardRoomText";

export interface RoomCardHeaderDescProps { }

export const RoomCardHeaderDesc: React.FC<RoomCardHeaderDescProps> = ({ }) => {
    return (
        <StandardRoomText
            color="#ffffff"
            fontWeight="400"
            fontSize="sm"
            backgroundColor="#151A21"
        >
            Room Description
        </StandardRoomText>
    )
}