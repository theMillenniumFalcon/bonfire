import Link from "next/link";
import React from "react";
import { Logo } from "../logo/Logo";

export interface LeftHeaderProps { }

export const LeftHeader: React.FC<LeftHeaderProps> = ({ }) => {
  return (
    <Link href="/dashboard">
      <Logo />
    </Link>
  )
}
