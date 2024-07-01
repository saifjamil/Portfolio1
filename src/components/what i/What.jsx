import React from 'react'
import './what.css'
import { Col, Container, Row } from 'react-bootstrap'
import cardone from '../../assets/cardone.png'
import cardtwo from '../../assets/cardtwo.png'
import cardthree from '../../assets/cardthree.png'
import arrowd from '../../assets/arrowd.png'

const What = () => {
    return (
        <>
            <section id='what'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='what-text'>What i do?</h2>
                            <img src={arrowd} alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="one">
                                <h4 className='top'>Pen/Paper</h4>
                                <img src={cardone} alt="" />
                                <p>User Research
                                    <br />  Design</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="two">
                                <h4 className='toptwo'>Figma</h4>
                                <img src={cardtwo} alt="" />
                                <p>UI & Product <br /> Design</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="three">
                                <h4 className='topthree'>Webflow</h4>
                                <img src={cardthree} alt="" />
                                <p>No-code <br /> Development</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default What