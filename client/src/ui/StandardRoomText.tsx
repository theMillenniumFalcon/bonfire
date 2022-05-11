import { Text } from "@chakra-ui/react";
import React from "react";

export interface StandardRoomTextProps {
    children?: any;
    color: string;
    fontSize?: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string;
    cursor?: string;
    backgroundColor?: string
}

export const StandardRoomText: React.FC<StandardRoomTextProps> = ({
    children, fontSize, cursor, color, marginTop, marginBottom, fontWeight, backgroundColor
}) => {
    return (
        <Text
            fontSize={fontSize}
            letterSpacing="0.7px"
            backgroundColor={backgroundColor}
            color={color}
            fontWeight={fontWeight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            cursor={cursor}>
            {children}
        </Text>
    )
}