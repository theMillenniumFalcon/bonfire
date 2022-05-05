import { Text } from "@chakra-ui/react";
import React from "react";

export interface StandardRoomTextProps {
    children: any;
    color: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string;
    cursor?: string;
    backgroundColor?: string
}

export const StandardRoomText: React.FC<StandardRoomTextProps> = ({
    children, cursor, color, marginTop, marginBottom, fontWeight, backgroundColor
}) => {
    return (
        <Text
            fontSize='sm'
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