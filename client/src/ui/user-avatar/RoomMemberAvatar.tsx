import { Box, Img } from "@chakra-ui/react";
import React from "react";

export interface RoomMemberAvatarProps {
    backgroundColor?: string;
    marginRight?: string;
}

export const RoomMemberAvatar: React.FC<RoomMemberAvatarProps> = ({
    backgroundColor, marginRight }) => {
    return (
        <Box backgroundColor={backgroundColor}>
            <Img
                cursor='pointer'
                htmlHeight="50px"
                htmlWidth="50px"
                objectFit='cover'
                borderRadius="50%"
                src='https://pbs.twimg.com/profile_images/1437439089284952069/B_uA3THD_400x400.jpg'
                alt='tobey'
                mr={marginRight}
            />
        </Box>
    )
}