import React from "react";
import { TimeIcon } from '@chakra-ui/icons'

export interface TimeProps { }

export const Time: React.FC<TimeProps> = ({ }) => {
    return (
        <TimeIcon color="#ffffff" w="15px" h="15px" mr={4} />
    )
}