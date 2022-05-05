import { HamburgerIcon, ExternalLinkIcon, InfoIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";

export interface RightSectionUserDropDownProps { }

export const RightSectionUserDropDown: React.FC<RightSectionUserDropDownProps> = ({ }) => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList backgroundColor="#FD4D4D" border="#FD4D4D" color="#0B0E11">
                <MenuItem icon={<InfoIcon />}>
                    View Profile
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>
                    Logout
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
