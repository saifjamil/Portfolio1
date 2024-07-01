import React from 'react'
import './name.css'
import { TypeAnimation } from 'react-type-animation';
import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaFacebook  , FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa6";



const Name = () => {
    return (
        <>
            <section id='name'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='namehead'><span>I'M</span> Saif Jamil</h1>
                            <TypeAnimation className='topname'
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Web Developer', // initially rendered starting point
                                    1000,
                                    'W',
                                    1000,
                                    'Web Developer',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                            <div className="icons">
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="https://www.facebook.com/saifjamil51"><FaFacebook   /></a>
                                <a href="https://www.instagram.com/saif_jamil_252/"><FaInstagram /></a>
                                <a href="https://twitter.com/saifjamil51"><FaTwitter /></a>
                                <a href="#"><FaTelegram /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Name