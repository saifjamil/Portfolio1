import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import banleft from '../../assets/banner.svg'
import arroimg from '../../assets/arrow.png'


const Banner = () => {
    return (
        <>
            <section id='banner'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="ban-left">
                                <div className="lefted-img">
                                    <img src={banleft} className='vecimg' alt="" />
                                    <img src={arroimg} className='arro' alt="" />
                                    <div className="name-top">
                                    <p className='nknm'>Saif</p>
                                    </div>
                                </div>
                                <h2>I design top notch <br /> websites</h2>
                            </div>
                        </Col>
                        <Col lg={{span:6, offset:1}}>
                            <div className="ban-right">
                                <p>I’ll design your website and will develop
                                    to land it on internet using No-code</p>
                                <a href="#">Hire Me</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner