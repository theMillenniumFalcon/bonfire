import { Box } from "@chakra-ui/react";
import React from "react";

export interface StandardBubbleProps {
    color: string
    marginRight?: string
    backgroundColor?: string
}

export const StandardBubble: React.FC<StandardBubbleProps> = ({ color, marginRight, backgroundColor }) => {
    return (
        <Box backgroundColor={backgroundColor} color={color} marginRight={marginRight}>●</Box>
    )
}