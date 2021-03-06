import { HamburgerIcon, ExternalLinkIcon, InfoIcon, SettingsIcon, QuestionIcon, LinkIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { StandardUserText } from "../StandardUserText";

export interface RightSectionUserDropDownProps { }

export const RightSectionUserDropDown: React.FC<RightSectionUserDropDownProps> = ({ }) => {
    const router = useRouter()
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                backgroundColor="#0B0E11"
                border="#0B0E11"
                color="#ffffff"
                style={{ backgroundColor: "#0B0E11" }}
            />
            <MenuList backgroundColor="#0B0E11" border="#0B0E11" color="#ffffff">
                <MenuItem icon={<InfoIcon />} style={{ backgroundColor: "#0B0E11" }}
                onClick={() => router.push('/user/tobey')}>
                    <StandardUserText color="#ffffff" fontSize="15px" fontWeight="600">
                        View Profile
                    </StandardUserText>
                </MenuItem>
                <MenuItem icon={<SettingsIcon />} style={{ backgroundColor: "#0B0E11" }}
                onClick={() => router.push('/settings/voice')}>
                    <StandardUserText color="#ffffff" fontSize="15px" fontWeight="600">
                        Settings
                    </StandardUserText>
                </MenuItem>
                <MenuItem icon={<QuestionIcon />} style={{ backgroundColor: "#0B0E11" }}
                onClick={() => router.push('/developer/bots')}>
                    <StandardUserText color="#ffffff" fontSize="15px" fontWeight="600">
                        Bots
                    </StandardUserText>
                </MenuItem>
                <MenuItem icon={<LinkIcon />} style={{ backgroundColor: "#0B0E11" }}
                onClick={() => router.push('/review')}>
                    <StandardUserText color="#ffffff" fontSize="15px" fontWeight="600">
                        Write a review
                    </StandardUserText>
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} style={{ backgroundColor: "#0B0E11" }}
                onClick={() => router.push('/')}>
                    <StandardUserText color="#ffffff" fontSize="15px" fontWeight="600">
                        Logout
                    </StandardUserText>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
