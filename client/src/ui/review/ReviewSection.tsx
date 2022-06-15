import { Flex } from "@chakra-ui/react";
import React from "react";
import { ReviewCard } from "./ReviewCard";

export interface ReviewSectionProps { }

export const ReviewSection: React.FC<ReviewSectionProps> = ({ }) => {
    return (
        <Flex align="center" justify="center" height="100%">
            <ReviewCard />
        </Flex>
    )
}