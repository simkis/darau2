import Slider from "react-slick"
import styled from "styled-components"

interface GalleryContainerProps {
    dark?: boolean
}
export const GalleryContainer = styled.div<GalleryContainerProps>`
    color:#fff;
    background: ${(props) => (props.dark ? '#010606' : '#f9f9f9')};
    
    @media screen and (max-width: 768px) {
     padding :100px 0 ;
    }
`

export const GalleryWrapper = styled.div`
    display: flex;
    z-index: 1;
    width: 75%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 50px 24px;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 95%;
    }
`

export const StyledSlider = styled(Slider)`
`

export const GalleryImage = styled.img`
   border-radius: 10px;
`

export const GalleryH1 = styled.h1`
    align-self: center;
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`
