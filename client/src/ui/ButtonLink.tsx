import React from "react";

const ButtonLink: React.FC<React.ComponentPropsWithoutRef<"button">> = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
        >
            {children}
        </button>
    )
}

export default ButtonLink