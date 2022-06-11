import React from "react";
import { CreateNewBot } from "../../ui/bots/CreateNewBot";
import { MainWrapper } from '../wrappers/MainWrapper';

export type CreateNewBotPageProps = {}

export const CreateNewBotPage: React.FC<CreateNewBotPageProps> = ({}) => {
    return (
        <MainWrapper>
            <CreateNewBot />
        </MainWrapper>
    )
}
