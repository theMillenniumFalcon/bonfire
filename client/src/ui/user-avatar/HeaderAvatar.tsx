import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import { RightSectionUserDropDown } from "../dropdowns/RightSectionUserDropDown";

export interface HeaderAvatarProps { }

export const HeaderAvatar: React.FC<HeaderAvatarProps> = ({ }) => {
    return (
        <Flex align="center" justify="space-between">
            <Img
                cursor='pointer'
                htmlWidth='35px'
                htmlHeight='35px'
                objectFit='cover'
                borderRadius="50%"
                src='https://pbs.twimg.com/profile_images/1437439089284952069/B_uA3THD_400x400.jpg'
                alt='tobey'
                marginRight={6}
            />
            <RightSectionUserDropDown />
        </Flex>
    )
}