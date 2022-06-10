import React from "react";
import { DeveloperCentreSection } from "../section/DeveloperCentreSection";
import { LeftSection } from "../section/LeftSection";
import { RightSection } from "../section/RightSection";
import { MainWrapper } from '../wrappers/MainWrapper';

export type BotsPageProps = {}

export const BotsPage: React.FC<BotsPageProps> = ({}) => {
    return (
        <MainWrapper>
            <LeftSection />
            <DeveloperCentreSection />
            <RightSection />
        </MainWrapper>
    )
}
