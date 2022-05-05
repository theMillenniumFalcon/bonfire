import { Text } from "@chakra-ui/react";
import React from "react";
import { StandardText } from './StandardText';

export interface StandardLinkProps {
    children: any;
    color: string;
    marginTop?: string;
    marginBottom?: string;
}

export const StandardLink: React.FC<StandardLinkProps> = ({ children, color, marginTop, marginBottom }) => {
    return (
        <StandardText color={color} marginTop={marginTop} marginBottom={marginBottom}>
            <Text as='u' cursor="pointer">
                {children}
            </Text>
        </StandardText>
    )
}
