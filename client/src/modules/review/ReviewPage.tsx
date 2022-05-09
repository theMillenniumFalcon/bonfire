import React from "react";
import { ReviewPageForm } from "../../ui/input-forms/ReviewPageForm";
import { MainWrapper } from '../wrappers/MainWrapper';

export type ReviewPageProps = {}

export const ReviewPage: React.FC<ReviewPageProps> = ({}) => {
    return (
        <MainWrapper>
            <ReviewPageForm />
        </MainWrapper>
    )
}
