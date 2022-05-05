import { Text } from "@chakra-ui/react";
import React from "react";
import { StandardUserText } from './StandardUserText';

export interface StandardLinkProps {
    backgroundColor?: string;
    fontSize: string;
    children: any;
    color: string;
    marginTop?: string;
    marginBottom?: string;
}

export const StandardLink: React.FC<StandardLinkProps> = ({ children, backgroundColor, fontSize, color, marginTop, marginBottom }) => {
    return (
        <StandardUserText fontSize={fontSize} color={color} marginTop={marginTop} marginBottom={marginBottom}>
            <Text as='u' cursor="pointer" backgroundColor={backgroundColor}>
                {children}
            </Text>
        </StandardUserText>
    )
}
