import { Flex } from "@chakra-ui/react";
import React from "react";
import { IconGroup } from "../IconGroup";
import { RightHeaderAvatar } from "../userAvatar/RightHeaderAvatar";

export interface RightHeaderProps { }

export const RightHeader: React.FC<RightHeaderProps> = ({ }) => {
  return (
    <Flex align="center" justify="space-between" width="100%" height="40px" pl={4}>
        <IconGroup />
        <RightHeaderAvatar />
    </Flex>
  )
}
