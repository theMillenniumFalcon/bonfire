import React from "react";
import { BellIcon } from '@chakra-ui/icons'

export interface NotificationProps { }

export const Notification: React.FC<NotificationProps> = ({ }) => {
    return (
        <BellIcon color="#ffffff" w="20px" h="20px" cursor="pointer" />
    )
}