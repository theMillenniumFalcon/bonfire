import { Box, Img } from "@chakra-ui/react";
import React from "react";

export interface UserCentreSectionBannerProps { }

export const UserCentreSectionBanner: React.FC<UserCentreSectionBannerProps> = ({ }) => {
    return (
        <Box>
            <Img
                htmlWidth="100"
                htmlHeight="130"
                objectFit='cover'
                src='./banner.jpg'
                alt='banner'
            />
            {/* <StandardBubble color="#FD4D4D" /> */}
        </Box>
    )
}