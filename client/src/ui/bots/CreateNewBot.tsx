import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import { StandardAuthText } from "../StandardAuthText";

export type CreateNewBotProps = {}

export const CreateNewBot: React.FC<CreateNewBotProps> = ({ }) => {
    return (
        <Box>
            <StandardAuthText fontSize="20px" fontWeight="600" color="#FD4D4D">
                How to create bots:
            </StandardAuthText>
            <Box marginTop={5} marginLeft={3} color="#ffffff">
            <OrderedList>
                <ListItem marginBottom={1}>Lorem ipsum dolor sit amet</ListItem>
                <ListItem marginBottom={1}>Lorem ipsum dolor sit amet</ListItem>
            </OrderedList>
            </Box>
        </Box>
    )
}
