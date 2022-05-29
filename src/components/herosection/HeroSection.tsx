import React from 'react'
import { HeroContainer, HeroBackground, VideoBackground, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from './HeroSectionElements'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

function HeroSection() {
    return (
        <HeroContainer id="Home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} ></VideoBackground>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Lorem ipsum dolor</HeroH1>
                <HeroP> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" primary={true} dark={true}>Get started</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection