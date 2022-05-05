import React from "react";
import { StandardRoomText } from "../StandardRoomText";

interface RoomMembersProps { }

export const RoomMembers: React.FC<RoomMembersProps> = ({ }) => {
    return (
        <StandardRoomText color="#5D7290" fontWeight="650" backgroundColor="#151A21" marginTop="10px" marginBottom="10px">
            Peter, Tony, Tobey...
        </StandardRoomText>
    )
}