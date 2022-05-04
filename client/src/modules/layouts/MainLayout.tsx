import React from "react";
import { MainWrapper, MainWrapperVariant } from "../wrappers/MainWrapper";

interface LayoutProps {
    children: any;
    variant?: MainWrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
    return (
        <>
            <MainWrapper variant={variant}>{children}</MainWrapper>
        </>
    )
}