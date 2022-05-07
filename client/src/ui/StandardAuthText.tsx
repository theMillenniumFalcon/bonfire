import { Text } from "@chakra-ui/react";
import React from "react";

export interface StandardAuthTextProps {
    fontSize?: string;
    children: any;
    backgroundColor?: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string;
    cursor?: string;
}

export const StandardAuthText: React.FC<StandardAuthTextProps> = ({ children, fontSize, cursor, backgroundColor, marginTop, marginBottom, fontWeight }) => {
    return (
        <Text
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            letterSpacing="1px" color="#ffffff"
            fontWeight={fontWeight} marginTop={marginTop}
            marginBottom={marginBottom}
            cursor={cursor}
        >
            {children}
        </Text>
    )
}