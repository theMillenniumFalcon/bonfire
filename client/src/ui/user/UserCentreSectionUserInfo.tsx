import { Flex } from "@chakra-ui/react";
import React from "react";
import { UserCentreSectionUserDetails } from "./UserCentreSectionUserDetails";
import { UserProfileEditButton } from "./UserProfileEditButton";

export interface UserCentreSectionUserInfoProps { }

export const UserCentreSectionUserInfo: React.FC<UserCentreSectionUserInfoProps> = ({ }) => {
    return (
        <Flex align="center" marginLeft="20%" marginTop={5} backgroundColor="#151A21">
            <UserCentreSectionUserDetails />
            <UserProfileEditButton />
        </Flex>
    )
}