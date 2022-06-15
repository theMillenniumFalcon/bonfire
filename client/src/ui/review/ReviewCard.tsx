import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ReviewForm } from "../input-forms/ReviewForm";
import { StandardAuthText } from "../StandardAuthText";

export interface ReviewCardProps { }

export const ReviewCard: React.FC<ReviewCardProps> = ({ }) => {
    return (
        <Box paddingTop={10} paddingLeft={6} paddingRight={6} backgroundColor="#151A21" borderRadius="4px" height="40vh" width="30vw" zIndex="1">
            <StandardAuthText color="#ffffff" backgroundColor="#151A21" fontSize="20px" fontWeight="600">
                Leave a review
            </StandardAuthText>
            <Flex align="center" justify="center" backgroundColor="#151A21" height="80%">
                <ReviewForm />
            </Flex>
        </Box>
    )
}