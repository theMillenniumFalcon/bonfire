import React from "react";
import { LeftSection } from "../sections/LeftSection";
import { RightSection } from "../sections/RightSection";
import { MainWrapper } from "../wrappers/MainWrapper";
import { ExploreCentreSection } from "../sections/ExploreCentreSection";

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