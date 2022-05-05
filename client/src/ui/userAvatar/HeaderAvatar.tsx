import { Img } from "@chakra-ui/react";
import React from "react";
import { RightSectionUserDropDown } from "../dropdowns/RightSectionUserDropDown";

export interface HeaderAvatarProps { }

export const HeaderAvatar: React.FC<HeaderAvatarProps> = ({ }) => {
    return (
        <>
            <Img
                cursor='pointer'
                htmlWidth='35px'
                htmlHeight='35px'
                objectFit='cover'
                borderRadius="50%"
                src='user.jpg'
                alt='tobey'
            />
            <RightSectionUserDropDown />
        </>
    )
}