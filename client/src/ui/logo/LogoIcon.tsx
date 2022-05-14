import { Img } from "@chakra-ui/react";
import React from "react";

export interface LogoIconProps { }

export const LogoIcon: React.FC<LogoIconProps> = ({ }) => {
    return (
        <Img
            cursor='pointer'
            htmlWidth='35px'
            htmlHeight='35px'
            objectFit='cover'
            borderRadius="50%"
            src='https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'
            alt='hideout'
            mr={2}
        />
    )
}