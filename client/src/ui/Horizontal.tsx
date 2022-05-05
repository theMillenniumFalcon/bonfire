import React from "react";

export interface HorizontalProps { }

export const Horizontal: React.FC<HorizontalProps> = ({ }) => {
    return (
        <hr style={{
            marginBottom: "30px",
            marginTop: "30px",
            height: "2px",
            width: "100%",
            borderWidth: "0",
            color: "#242C37",
            backgroundColor: "#242C37"
        }}
        />
    )
}