import { Text } from "@chakra-ui/react";
import React from "react";
import { StandardUserText } from './StandardUserText';

export interface StandardLinkProps {
    children: any;
    color: string;
    marginTop?: string;
    marginBottom?: string;
}

export const StandardLink: React.FC<StandardLinkProps> = ({ children, color, marginTop, marginBottom }) => {
    return (
        <StandardUserText color={color} marginTop={marginTop} marginBottom={marginBottom}>
            <Text as='u' cursor="pointer">
                {children}
            </Text>
        </StandardUserText>
    )
}
