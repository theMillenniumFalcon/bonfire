import { Input } from "@chakra-ui/react";
import React from "react";

export interface RoomChatInputProps { }

export const RoomChatInput: React.FC<RoomChatInputProps> = ({ }) => {
    return (
        <Input
            variant='outline'
            border="none"
            background="#0B0E11"
            placeholder='Send a message'
            color="#ffffff"
        />
    )
}
