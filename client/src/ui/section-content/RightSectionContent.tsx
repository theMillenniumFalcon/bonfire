import { Box } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'
import { RightSectionUserCard } from "../user/RightSectionUserCard";

export interface RightSectionContentProps { }

export const RightSectionContent: React.FC<RightSectionContentProps> = ({ }) => {
    return (
        <Box marginTop={12}>
            <RightSectionUserCard />
            <Link href="/user/tobey">Dashboard</Link>
        </Box>
    )
}