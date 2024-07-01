import React from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import arrowdown from '../../assets/arrowdown.png'


const Contact = () => {
    return (
        <>
            <section id='from'>
                <Container>
                    <Row>
                        <Col lg={4} className='cont-text'>
                            <h3>Contact here</h3>
                            <img src={arrowdown} alt="" />
                            <p>Have a project idea?
                                <br /> just say me Hi. </p>
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }}>
                            <div className="from">
                                <div className="name">
                                    <p>Name</p><input type="text" placeholder='Enter Name' />
                                </div>
                                <div className="mail">
                                    <p>Your Mail</p><input type="email" placeholder='Enter Mail' />
                                </div>
                                <div className="about">
                                    <p> About Project</p><input type="text" placeholder=' I want to discuss you about .......' />
                                </div>
                                <a href="#">Send Here</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact