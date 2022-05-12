import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { StandardBubble } from "../StandardBubble";

export interface SectionContentAvatarProps {
    color?: string;
    htmlWidth: string;
    htmlHeight: string;
    backgroundColor?: string;
    marginRight?: string;
}

export const SectionContentAvatar: React.FC<SectionContentAvatarProps> = ({ 
    htmlWidth, htmlHeight, backgroundColor, color, marginRight }) => {
    return (
        <Box backgroundColor={backgroundColor}>
            <Img
                cursor='pointer'
                color={color}
                htmlWidth={htmlWidth}
                htmlHeight={htmlHeight}
                objectFit='cover'
                borderRadius="50%"
                src='user.jpg'
                alt='tobey'
                mr={marginRight}
            />
            {/* <StandardBubble color="#FD4D4D" /> */}
        </Box>
    )
}