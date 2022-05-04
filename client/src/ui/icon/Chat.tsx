import React from "react";
import { ChatIcon } from '@chakra-ui/icons'

export interface ChatProps { }

export const Chat: React.FC<ChatProps> = ({ }) => {
    return (
        <ChatIcon color="#ffffff" w="20px" h="20px" />
    )
}