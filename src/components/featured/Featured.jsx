import React from 'react'
import './featured.css'
import { Col, Container, Row } from 'react-bootstrap'
import arrowdown from '../../assets/arrowdown.png'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/projec4.png'

const Featured = () => {
    return (
        <>
            <section id='feature'>
                <Container>
                    <Row>
                        <Col lg={4} className='fea-text'>
                            <h3>Featured Projects</h3>
                            <img src={arrowdown} alt="" />
                            <p>Have designed <br /> morethan 20 projects</p>
                        </Col>
                        <Col lg={4}>
                            <div className="fea-one">
                                <img src={project1} alt="" />
                                <div className="one-bottom">
                                    <span>4 style Portfolio <br />
                                        design</span>
                                    <div className="btn">
                                        <a href="#">No-Code</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="fea-one">
                                <img src={project2} alt="" />
                                <div className="one-bottom">
                                    <span>4 style Portfolio <br />
                                        design</span>
                                    <div className="btn">
                                        <a href="#">No-</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row id='sec-row'>
                        <Col lg={4}>

                        </Col>
                        <Col lg={4}>
                            <div className="fea-one">
                                <img src={project3} alt="" />
                                <div className="one-bottom">
                                    <span>4 style Portfolio <br />
                                        design</span>
                                    <div className="btn">
                                        <a href="#">No-Code</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="fea-one">
                                <img src={project4} alt="" />
                                <div className="one-bottom">
                                    <span>4 style Portfolio <br />
                                        design</span>
                                    <div className="btn">
                                        <a href="#">No-Code</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Featured