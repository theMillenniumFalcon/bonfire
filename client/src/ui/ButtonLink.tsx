import React from "react";

export const ButtonLink: React.FC<React.ComponentPropsWithoutRef<"button">> = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
        >
            {children}
        </button>
    )
}
