import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { StandardBubble } from "../StandardBubble";

export interface SectionContentAvatarProps {
    color?: string;
    htmlWidth: string;
    htmlHeight: string;
    backgroundColor?: string

}

export const SectionContentAvatar: React.FC<SectionContentAvatarProps> = ({ htmlWidth, htmlHeight, backgroundColor, color }) => {
    return (
        <Box pos="relative">
            <Img
                cursor='pointer'
                color={color}
                backgroundColor={backgroundColor}
                htmlWidth={htmlWidth}
                htmlHeight={htmlHeight}
                objectFit='cover'
                borderRadius="50%"
                src='user.jpg'
                alt='tobey'
                mr={3}
            />
            {/* <StandardBubble color="#FD4D4D" /> */}
        </Box>
    )
}