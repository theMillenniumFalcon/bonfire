import { Box } from "@chakra-ui/react";
import React from "react";
import { CentreProfileAvatar } from "../user-avatar/CentreProfileAvatar";
import { UserCentreSectionUserInfo } from "./UserCentreSectionUserInfo";

export interface UserCentreSectionUserProps { }

export const UserCentreSectionUser: React.FC<UserCentreSectionUserProps> = ({ }) => {
    return (
        <>
            <Box position="fixed" top="210" marginLeft={5}>
                <CentreProfileAvatar
                    backgroundColor="red"
                    marginRight="0px"
                />
            </Box>
            <UserCentreSectionUserInfo />
        </>
    )
}