import { Link } from "@chakra-ui/react";
import React from "react";
import { StandardUserText } from './StandardUserText';

export interface StandardLinkProps {
    backgroundColor?: string;
    fontSize: string;
    href: string;
    color: string;
    content: string;
    marginTop?: string;
    marginBottom?: string;
}

export const StandardLink: React.FC<StandardLinkProps> = ({
    href,
    backgroundColor,
    fontSize,
    color,
    marginTop,
    marginBottom,
    content
}) => {
    return (
        <StandardUserText
            fontSize={fontSize}
            color={color}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <Link href={href} cursor="pointer" backgroundColor={backgroundColor}>
                {content}
            </Link>
        </StandardUserText>
    )
}
