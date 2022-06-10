import React from "react";
import { LeftSection } from "../section/LeftSection";
import { RightSection } from "../section/RightSection";
import { MainWrapper } from "../wrappers/MainWrapper";
import { ExploreCentreSection } from "../section/ExploreCentreSection";

export interface ExplorePageProps { }

export const ExplorePage: React.FC<ExplorePageProps> = ({ }) => {
    return (
        <MainWrapper>
            <LeftSection />
            <ExploreCentreSection />
            <RightSection />
        </MainWrapper>
    )
}