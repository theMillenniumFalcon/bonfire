import React from "react";
import { UserCentreSectionCardDivider } from "./UserCentreSectionCardDivider";
import { UserCentreSectionProfileContentCard } from "./UserCentreSectionProfileContentCard";
import { UserCentreSectionProfileDescCard } from "./UserCentreSectionProfileDescCard";
import { UserCentreSectionSettings } from "./UserCentreSectionSettings";

export interface UserCentreSectionProfileContentProps { }

export const UserCentreSectionProfileContent: React.FC<UserCentreSectionProfileContentProps> = ({ }) => {
    return (
        <>
            <UserCentreSectionProfileContentCard />
            <UserCentreSectionCardDivider />
            <UserCentreSectionProfileDescCard />
            <UserCentreSectionSettings />
        </>
    )
}