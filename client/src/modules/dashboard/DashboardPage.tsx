import React from "react";
import { DashboardCentreSection } from "../section/DashboardCentreSection";
import { LeftSection } from "../section/LeftSection";
import { RightSection } from "../section/RightSection";
import { MainWrapper } from '../wrappers/MainWrapper';

export type DashboardPageProps = {}

export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
    return (
        <MainWrapper>
            <LeftSection />
            <DashboardCentreSection />
            <RightSection />
        </MainWrapper>
    )
}
