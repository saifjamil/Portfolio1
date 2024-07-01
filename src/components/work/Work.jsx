import React from 'react'
import './work.css'
import { Col, Container, Row } from 'react-bootstrap'
import arrowdown from '../../assets/arrowdown.png'
import leftimgone from '../../assets/Frame.png'
import leftimgtwo from '../../assets/Frame2.png'
import leftimgthree from '../../assets/Frame3.png'

const Work = () => {
    return (
        <>
            <section id='work'>
                <Container>
                    <Row>
                        <Col lg={4} className='work-text'>
                            <h3>Work Experience</h3>
                            <img src={arrowdown} alt="" />
                            <p>Have been designing <br /> since my past 4 years</p>
                        </Col>
                        <Col lg={{span:7, offset:1}}>
                        <div className="work-one-text">
                                <div className="wo-left">
                                <img src={leftimgone} alt="" />
                                </div>
                                <div className="wo-right">
                                    <h4>Design intern at <b>Google</b></h4>
                                    <h6>Worked on design system at Material 3 designs</h6>
                                    <p>20, April 2021</p>
                                </div>
                            </div>
                            <div className="work-one-text">
                                <div className="wo-left">
                                <img src={leftimgtwo} alt="" />
                                </div>
                                <div className="wo-right">
                                    <h4>Sr. UI/UX Designer at <b>Microsoft</b></h4>
                                    <h6>Worked on design system at Material 3 designs</h6>
                                    <p>20, April 2021</p>
                                </div>
                            </div>
                            <div className="work-one-text">
                                <div className="wo-left">
                                <img src={leftimgthree} alt="" />
                                </div>
                                <div className="wo-right">
                                    <h4>Software Engineer at <b>SASS Startup</b></h4>
                                    <h6>Worked on design system at Material 3 designs</h6>
                                    <p>20, April 2021</p>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Work