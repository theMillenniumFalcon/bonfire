import React from "react";
import { DashboardCentreSection } from "../sections/DashboardCentreSection";
import { LeftSection } from "../sections/LeftSection";
import { RightSection } from "../sections/RightSection";
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
