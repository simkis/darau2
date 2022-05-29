import styled from "styled-components";


interface InfoContainerProps {
    dark?: boolean
}
export const InfoContainer = styled.div<InfoContainerProps>`
    color:#fff;
    background: ${(props) => (props.dark ? '#010606' : '#f9f9f9')};
    
    @media screen and (max-width: 768px) {
     padding :100px 0 ;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

interface InfoRowProps {
    imgStart?: boolean
}
export const InfoRow = styled.div<InfoRowProps>`
    display: grid;
    grid-auto-rows: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${(props) => (props.imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas: ${(props) => (props.imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

interface HeadingProps {
    dark?: boolean
}
export const Heading = styled.h1<HeadingProps>`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${(props) => (props.dark ? '#010606' : '#f7f8fa')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

interface SubtitleProps {
    dark?: boolean
}
export const Subtitle = styled.p<SubtitleProps>`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => (props.dark ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right :0;
`