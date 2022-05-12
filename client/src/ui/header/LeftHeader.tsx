import React from "react";
import { Logo } from "../logo/Logo";
import NextLink from 'next/link'
import { Link } from "@chakra-ui/react";

export interface LeftHeaderProps { }

export const LeftHeader: React.FC<LeftHeaderProps> = ({ }) => {
  return (
    <NextLink href='/dashboard'>
      <Link>
        <Logo />
      </Link>
    </NextLink>
  )
}
