import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { LogoIcon } from "../../icons/LogoIcon";
import { LogoText } from "../LogoText";

export interface LeftHeaderProps { }

export const LeftHeader: React.FC<LeftHeaderProps> = ({ }) => {
  return (
    <Link href="/dashboard">
      <Flex align="center" justify="space-between" width="80px" height="40px">
        <LogoIcon />
        <LogoText />
      </Flex>
    </Link>
  )
}
