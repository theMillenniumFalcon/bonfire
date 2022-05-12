import { Heading } from "@chakra-ui/react";
import React from "react";

export interface LeftSettingsSectionContentHeadingProps { }

export const LeftSettingsSectionContentHeading: React.FC<LeftSettingsSectionContentHeadingProps> = ({ }) => {
    return (
        <Heading as='h4' size='md' color="#ffffff">
            Settings
        </Heading>
    )
}