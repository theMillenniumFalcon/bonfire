import { Link } from "@chakra-ui/react";
import React from "react";
import { StandardUserText } from './StandardUserText';
import NextLink from 'next/link'

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
            <NextLink href={href}>
                <Link cursor="pointer" backgroundColor={backgroundColor}>
                    {content}
                </Link>
            </NextLink>
        </StandardUserText>
    )
}
