import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftCornerBlob } from "../../ui/blob/LeftCornerBlob";
import { RightCornerBlob } from "../../ui/blob/RightCornerBlob";
import { ReviewSection } from "../../ui/review/ReviewSection";

export type ReviewPageProps = {}

export const ReviewPage: React.FC<ReviewPageProps> = ({}) => {
    return (
        <Box width="100vw" height="94.3vh">
            <LeftCornerBlob />
            <RightCornerBlob />
            <ReviewSection />
        </Box>
    )
}
