import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkOutside, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

function Footer() {

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/about">How it works</FooterLink>
                                <FooterLink to="/about">Testimonials</FooterLink>
                                <FooterLink to="/about">Careers</FooterLink>
                                <FooterLink to="/about">Investors</FooterLink>
                                <FooterLink to="/about">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/contact">How it works</FooterLink>
                                <FooterLink to="/contact">Testimonials</FooterLink>
                                <FooterLink to="/contact">Careers</FooterLink>
                                <FooterLink to="/contact">Investors</FooterLink>
                                <FooterLink to="/contact">Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/contact">How it works</FooterLink>
                                <FooterLink to="/contact">Testimonials</FooterLink>
                                <FooterLink to="/contact">Careers</FooterLink>
                                <FooterLink to="/contact">Investors</FooterLink>
                                <FooterLink to="/contact">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social media</FooterLinkTitle>
                                <FooterLinkOutside href='//www.facebook.com' target="_blank">Facebook</FooterLinkOutside>
                                <FooterLinkOutside href='//www.twitter.com' target="_blank">Twitter</FooterLinkOutside>
                                <FooterLinkOutside href='//www.instagram.com' target="_blank">Instagram</FooterLinkOutside>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={scrollToTop}>darau2</SocialLogo>
                            <WebsiteRights>darau2 2022 All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                                <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer