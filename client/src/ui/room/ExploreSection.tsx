import React from "react";
import { Horizontal } from "../Horizontal";
import { DashboardRoomDefault } from "./DashboardRoomDefault";
import { DashboardRoomUpcoming } from "./DashboardRoomUpcoming";

interface ExploreSectionProps { }

export const ExploreSection: React.FC<ExploreSectionProps> = ({ }) => {
    return (
        <>
            <DashboardRoomUpcoming />
            <Horizontal marginBottom="30px" marginTop="30px" width="100%" color="#242C37" backgroundColor="#242C37" />
            <DashboardRoomDefault />
        </>
    )
}