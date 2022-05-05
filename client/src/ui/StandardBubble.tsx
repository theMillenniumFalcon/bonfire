import { Box } from "@chakra-ui/react";
import React from "react";

export interface StandardBubbleProps { }

export const StandardBubble: React.FC<StandardBubbleProps> = ({ }) => {
    const Bubble = () => (
        <Box pos="fixed" style={{ color: "#FD4D4D" }}>●</Box>
    )
    return (
        <Bubble />
    )
}