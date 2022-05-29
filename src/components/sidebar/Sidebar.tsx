import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from './SidebarElements'

interface SidebarProps {
    toggle: () => void;
    isOpen: boolean;
}

function Sidebar(props: SidebarProps) {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle} >
            <Icon onClick={props.toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={props.toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={props.toggle}>Services</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar