import React from "react";
import { CentreSection } from "../sections/CentreSection";
import { LeftSection } from "../sections/LeftSection";
import { RightSection } from "../sections/RightSection";
import { MainWrapper } from '../wrappers/MainWrapper';

export type DashboardPageProps = {}

export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
    return (
        <MainWrapper>
            <LeftSection />
            <CentreSection />
            <RightSection />
        </MainWrapper>
    )
}
