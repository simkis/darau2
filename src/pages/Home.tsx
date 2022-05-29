import React, { useState } from 'react'
import Footer from '../components/footer/Footer';
import GallerySection from '../components/gallery/GallerySection';
import HeroSection from '../components/herosection/HeroSection';
import { homeSection1, homeSection2 } from '../components/infosection/Data';
import InfoSection from '../components/infosection/InfoSection';
import NavBar from '../components/navbar/Navbar'
import Services from '../components/services/Services';
import Sidebar from '../components/sidebar/Sidebar'

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeSection1} />
            <InfoSection {...homeSection2} />
            <GallerySection />
            <Services />
            <Footer />
        </>
    )
}

export default HomePage