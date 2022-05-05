import React from "react";
import { StandardUserText } from "./StandardUserText";

export interface OnlineNumTextProps { }

export const OnlineNumText: React.FC<OnlineNumTextProps> = ({ }) => {
    return (
        <StandardUserText color="#5D7290" marginTop="30px" marginBottom="20px" fontWeight="bold">
            ONLINE (23)
        </StandardUserText>
    )
}