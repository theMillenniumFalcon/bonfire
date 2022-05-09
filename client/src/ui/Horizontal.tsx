import { Box } from "@chakra-ui/react";
import React from "react";

export interface HorizontalProps {
    marginBottom: string;
    marginTop: string;
    width: string;
    color: string;
    backgroundColor: string
}

export const Horizontal: React.FC<HorizontalProps> = ({ marginBottom, marginTop, width, color, backgroundColor }) => {
    return (
        <Box
            marginBottom={marginBottom}
            marginTop={marginTop}
            height="2px"
            width={width}
            borderWidth="0"
            color={color}
            backgroundColor={backgroundColor}
        />
    )
}