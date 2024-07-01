import React from 'react'
import './skills.css'
import { Col, Container, Row } from 'react-bootstrap'
import figma from '../../assets/figma.svg'
import sketch from '../../assets/sketch.svg'
import xd from '../../assets/xd.svg'
import wp from '../../assets/wp.svg'
import reacts from '../../assets/react.svg'
import js from '../../assets/js.svg'

const Skills = () => {
    return (
        <>
            <section id='skills'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="skill-top">
                                <h2>My Skills</h2>
                                <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                            </div>
                            <div className="skill-bottom">
                                <div className="skill-item">
                                    <div className="skill-inner">
                                        <div className="inner-top">
                                            <img src={figma} alt="" />
                                            <div className="number">92%</div>
                                        </div>
                                    </div>
                                    <p>Figma</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-inner">
                                        <div className="inner-top">
                                            <img src={sketch} alt="" />
                                            <div className="number">80%</div>
                                        </div>
                                    </div>
                                    <p>Sketch</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-inner">
                                        <div className="inner-top">
                                            <img src={xd} alt="" />
                                            <div className="number">85%</div>
                                        </div>
                                    </div>
                                    <p>XD</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-inner">
                                        <div className="inner-top">
                                            <img src={wp} alt="" />
                                            <div className="number">85%</div>
                                        </div>
                                    </div>
                                    <p>WordPess</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-inner">
                                        <div className="inner-top">
                                            <img src={reacts} alt="" />
                                            <div className="number">99%</div>
                                        </div>
                                    </div>
                                    <p>React</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-inner">
                                        <div className="inner-top">
                                            <img src={js} alt="" />
                                            <div className="number">93%</div>
                                        </div>
                                    </div>
                                    <p>JavaScript</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Skills