import React from 'react'
import Menu from '../components/navbar/Menu'
import Banner from '../components/banner/Banner'
import What from '../components/what i/What'
import Featured from '../components/featured/Featured'
import Work from '../components/work/Work'
import Name from '../portfolio/name/Name'
import About from '../portfolio/about/About'
import Aboutme from '../portfolio/aboutme/Aboutme'
import Latest from '../portfolio/latest/Latest'
import Skills from '../portfolio/skills/Skills'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'


const Home = () => {
    return (
        <>
            <Menu />
            <Name />
            <Banner />
            <Aboutme />
            <About />
            <Featured />
            <Latest />
            <What />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}

export default Home