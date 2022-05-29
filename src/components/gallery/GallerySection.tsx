import React from 'react'
import { GalleryContainer, GalleryH1, GalleryImage, GalleryWrapper, StyledSlider } from './GallerySectionElements'
import Slider, { Settings } from "react-slick";
import Gallery1 from '../../images/gallery-1.jpg'
import Gallery2 from '../../images/gallery-2.jpg'
import Gallery3 from '../../images/gallery-3.jpg'
import Gallery4 from '../../images/gallery-4.jpg'


function GallerySection() {

    const images = [Gallery1, Gallery2, Gallery3, Gallery4];

    let settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:9000,
        fade:true,
    };
    
    return (
        <>
            <GalleryContainer id="gallery" dark={true}>
                <GalleryWrapper>
                <GalleryH1>Lorem ipsum</GalleryH1>
                    <StyledSlider {...settings}>
                        {
                            images.map((img, index) => (
                                <GalleryImage src={img} alt={img} key={index} />
                            ))
                        }
                    </StyledSlider>
                </GalleryWrapper>
            </GalleryContainer></>
    )
}

export default GallerySection