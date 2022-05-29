import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Lorem ipsum</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src="../../images/svg-1.svg"/>
                <ServicesH2>Lorem ipsum</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="../../images/svg-1.svg"/>
                <ServicesH2>Lorem ipsum</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="../../images/svg-1.svg"/>
                <ServicesH2>Lorem ipsum</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services