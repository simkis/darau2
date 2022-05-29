import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from './NavbarElements'

interface NavbarProps {
    toggle: () => void;
}

function NavBar(props: NavbarProps) {

    const [transparentNav, setTransparentNav] = useState(true);

    const changeTransparentNav = () => {
        if (window.scrollY >= 80) {
            setTransparentNav(false);
        } else {
            setTransparentNav(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeTransparentNav)
    }, [])

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <>
            <Nav transparent={transparentNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={scrollToTop}>Darau2</NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} offset={-80} >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} offset={-80} >Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar