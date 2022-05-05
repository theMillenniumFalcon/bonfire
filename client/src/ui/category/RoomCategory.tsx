import React from "react";
import { StandardRoomCategory } from "../StandardRoomCategory";

interface RoomCategoryProps { }

export const RoomCategory: React.FC<RoomCategoryProps> = ({ }) => {
    return (
        <StandardRoomCategory>
            #random
        </StandardRoomCategory>
    )
}