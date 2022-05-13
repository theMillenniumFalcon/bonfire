import { Box, Img } from "@chakra-ui/react";
import React from "react";

export interface UserCentreSectionBannerProps { }

export const UserCentreSectionBanner: React.FC<UserCentreSectionBannerProps> = ({ }) => {
    return (
        <Box width="100%">
            <Img
                htmlWidth="100"
                htmlHeight="130"
                objectFit='cover'
                // src='https://previews.123rf.com/images/vectorsilhouettes/vectorsilhouettes1802/vectorsilhouettes180200068/96275133-paisaje-urbano-horizontal-con-edificios-de-la-ciudad-ciudad-reflejada-en-el-agua-del-r%C3%ADo-.jpg'
                alt='banner'
            />
        </Box>
    )
}