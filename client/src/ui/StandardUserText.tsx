import { Text } from "@chakra-ui/react";
import React from "react";

export interface StandardUserTextProps {
    fontSize: string;
    children: any;
    color: string;
    backgroundColor?: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string;
    cursor?: string;
}

export const StandardUserText: React.FC<StandardUserTextProps> = ({ children, fontSize, cursor, color, backgroundColor, marginTop, marginBottom, fontWeight }) => {
    return (
        <Text backgroundColor={backgroundColor} fontSize={fontSize} letterSpacing="0.5px" color={color} fontWeight={fontWeight} marginTop={marginTop} marginBottom={marginBottom} cursor={cursor}>
            {children}
        </Text>
    )
}