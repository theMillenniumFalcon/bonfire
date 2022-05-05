import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { StandardBubble } from "../StandardBubble";

export interface LeftSectionContentAvatarProps { }

export const LeftSectionContentAvatar: React.FC<LeftSectionContentAvatarProps> = ({ }) => {
    return (
        <Box pos="relative">
            <Img
                cursor='pointer'
                htmlWidth='35px'
                htmlHeight='35px'
                objectFit='cover'
                borderRadius="50%"
                src='user.jpg'
                alt='tobey'
                mr={3}
            />
            <StandardBubble />
        </Box>
    )
}