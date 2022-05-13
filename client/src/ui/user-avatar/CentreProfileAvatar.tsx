import { Box, Img } from "@chakra-ui/react";
import React from "react";

export interface CentreProfileAvatarProps {
    backgroundColor?: string;
    marginRight?: string;
}

export const CentreProfileAvatar: React.FC<CentreProfileAvatarProps> = ({
    backgroundColor, marginRight }) => {
    return (
        <Box backgroundColor={backgroundColor}>
            <Img
                cursor='pointer'
                htmlHeight="90px"
                htmlWidth="90px"
                objectFit='cover'
                border="6px solid #151A21"
                borderRadius="50%"
                src='https://pbs.twimg.com/profile_images/1437439089284952069/B_uA3THD_400x400.jpg'
                alt='tobey'
                mr={marginRight}
            />
        </Box>
    )
}