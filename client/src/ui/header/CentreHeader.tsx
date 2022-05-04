import React from "react";
import { MainSearchBar } from "../inputField/MainSearchBar";

export interface CentreHeaderProps { }

export const CentreHeader: React.FC<CentreHeaderProps> = ({ }) => {
  return (
    <MainSearchBar />
  )
}
