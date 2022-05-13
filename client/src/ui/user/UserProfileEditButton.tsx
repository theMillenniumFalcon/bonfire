import { EditIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

export interface UserProfileEditButtonProps { }

export const UserProfileEditButton: React.FC<UserProfileEditButtonProps> = ({ }) => {
    return (
        <Button
            leftIcon={<EditIcon />}
            size='md'
            backgroundColor="#0B0E11"
            color="white"
            height='35px'
            width='130px'
            border='2px'
            borderColor='#0B0E11'
            _hover={{
                background: "#0B0E11"
            }}
        >
            Edit Profile
        </Button>
    )
}