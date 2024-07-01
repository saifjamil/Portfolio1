import React from 'react'
import './aboutme.css'
import { Col, Container, Row } from 'react-bootstrap'
import aboutmeimg from '../../assets/Saif.jpg'

const About = () => {
    return (
        <section id='aboutme'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="left-img">
                            <img src={aboutmeimg} alt="" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="me-head">
                            <h3>ABOUT ME</h3>
                            <h2>Web Developer from Bangladesh</h2>
                            <p>I am an aspiring web and software developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React. With a strong interest in technology and a dedication to delivering effective solutions, I am eager to apply my skills and expand my knowledge in practical settings. I am motivated to contribute positively to projects and grow professionally in the field of web and software development.</p>
                        </div>
                        <div className="list">
                            <div className="list-left">
                                <div className="namelist">
                                    <h5>Name</h5>
                                    <span>Saif Jamil</span>
                                </div>
                                <div className="namelist">
                                    <h5>Email</h5>
                                    <span>saifjamil61@gmail.com</span>
                                </div>
                                <div className="namelist">
                                    <h5>Phone</h5>
                                    <span>01642242686</span>
                                </div>
                            </div>
                            <div className="list-right">
                                <div className="namelist">
                                    <h5>Age</h5>
                                    <span>22 Years</span>
                                </div>
                                <div className="namelist">
                                    <h5>Education</h5>
                                    <span>Bsc</span>
                                </div>
                                <div className="namelist">
                                    <h5>Freelance</h5>
                                    <span>Available</span>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default About