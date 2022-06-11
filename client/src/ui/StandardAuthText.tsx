import { Text } from "@chakra-ui/react";
import React from "react";

export interface StandardAuthTextProps {
    fontSize?: string;
    children: any;
    color?: string;
    backgroundColor?: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string;
    cursor?: string;
}

export const StandardAuthText: React.FC<StandardAuthTextProps> = ({ children, fontSize, cursor, color, backgroundColor, marginTop, marginBottom, fontWeight }) => {
    return (
        <Text
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            color={color}
            letterSpacing="1px"
            fontWeight={fontWeight} marginTop={marginTop}
            marginBottom={marginBottom}
            cursor={cursor}
        >
            {children}
        </Text>
    )
}