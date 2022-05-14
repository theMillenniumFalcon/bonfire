import React from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface AddUserstoRoomProps { }

export const AddUserstoRoom: React.FC<AddUserstoRoomProps> = ({ }) => {
    const router = useRouter()
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
            onClick={() => router.push('/room/1/invite')}
        >
            <PersonAddIcon  style={{ backgroundColor: "#0B0E11" }} />
        </Flex>
    )
}