import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BotsEditForm } from "../input-forms/BotsEditForm";
import { StandardAuthText } from "../StandardAuthText";

export interface BotsEditCardProps { }

export const BotsEditCard: React.FC<BotsEditCardProps> = ({ }) => {
    return (
        <Box paddingTop={10} paddingLeft={6} paddingRight={6} backgroundColor="#151A21" borderRadius="4px" height="35vh" width="30vw" zIndex="1">
            <StandardAuthText backgroundColor="#151A21" fontSize="20px" fontWeight="600">
                Edit bot
            </StandardAuthText>
            <Flex align="center" justify="center" backgroundColor="#151A21" height="80%">
                <BotsEditForm />
            </Flex>
        </Box>
    )
}