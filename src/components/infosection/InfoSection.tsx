import React from 'react'
import { Button } from '../ButtonElements'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoSectionElements'

// import Image from '../../images/svg-1.svg';

export interface InfoSectionProps {
  id: string,
  topLine: string,
  headline: string,
  description: string,
  buttonLabel: string,
  imgStart: boolean,
  img: string,
  alt: string,
  dark: boolean,
  primary: boolean
}

const InfoSection = (props: InfoSectionProps) => {
  return (
    <InfoContainer dark={props.dark} id={props.id} >
      <InfoWrapper>
        <InfoRow imgStart={props.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{props.topLine}</TopLine>
              <Heading dark={!props.dark}>{props.headline}</Heading>
              <Subtitle dark={!props.dark}>{props.description}</Subtitle>
              <BtnWrap>
                <Button to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  primary={props.primary}
                  dark={props.dark}
                >{props.buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap><Img src={props.img} alt={props.alt} /></ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection