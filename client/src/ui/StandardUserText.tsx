import { Text } from "@chakra-ui/react";
import React from "react";

export interface StandardUserTextProps { 
    children: any;
    color: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string;
    cursor?: string;
}

export const StandardUserText: React.FC<StandardUserTextProps> = ({ children, cursor, color, marginTop, marginBottom, fontWeight }) => {
    return (
        <Text fontSize='xs' letterSpacing="0.5px" color={color} fontWeight={fontWeight} marginTop={marginTop} marginBottom={marginBottom} cursor={cursor}>
            {children}
        </Text>
    )
}