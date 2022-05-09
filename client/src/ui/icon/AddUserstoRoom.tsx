import React from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Flex } from "@chakra-ui/react";

export interface AddUserstoRoomProps { }

export const AddUserstoRoom: React.FC<AddUserstoRoomProps> = ({ }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="35px"
            width="40px"
            borderRadius='2px'
            backgroundColor="#0B0E11"
            mr={3}
            color="#ffffff"
            cursor="pointer"
        >
            <PersonAddIcon  style={{ backgroundColor: "#0B0E11" }} />
        </Flex>
    )
}