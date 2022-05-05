import React from "react";
import { StandardText } from "./StandardText";

export interface OnlineNumTextProps { }

export const OnlineNumText: React.FC<OnlineNumTextProps> = ({ }) => {
    return (
        <StandardText color="#5D7290" marginTop="30px" marginBottom="20px" fontWeight="bold">
            ONLINE (23)
        </StandardText>
    )
}