import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import navimg from '../../assets/Vector.png'
import './menu.css'
import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa6";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa";







const Menu = () => {
    return (
        <>
            {/* <Navbar expand="lg" className='menu-bg'>
                <Container>
                    <Navbar.Brand href="#home" className='icon'><img src={navimg} alt="" />Rifat Ibna Toukir</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='btn'>Home</Nav.Link>
                            <Nav.Link href="#link" className='btn'>Portfolio</Nav.Link>
                            <Nav.Link href="#link" className='btn'>Hire Me</Nav.Link>
                        </Nav>
                        <div className="contact">
                            <a href="#">Contact Me</a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <nav>
                <a href="#"><GoHome/></a>
                <a href="#aboutme"><CiUser/></a>
                <a href="#feature"><FaBook/></a>
                <a href="#latest"><GrContactInfo/></a>
                <a href="#what"><FaTrophy/></a>
                <a href="#from"><AiTwotoneCustomerService/></a>
            </nav>
        </>
    )
}

export default Menu