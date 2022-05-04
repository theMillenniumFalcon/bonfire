import { Img } from "@chakra-ui/react";
import React from "react";

export interface RightHeaderAvatarProps { }

export const RightHeaderAvatar: React.FC<RightHeaderAvatarProps> = ({ }) => {
    return (
        <Img
            cursor='pointer'
            htmlWidth='35px'
            htmlHeight='35px'
            objectFit='cover'
            borderRadius="50%"
            src='user.jpg'
            alt='tobey'
        />
    )
}