import React from 'react'
import './latest.css'
import { Col, Container, Row } from 'react-bootstrap'
import latestone from '../../assets/latest.png'
import latesttwo from '../../assets/latest1.png'
import latestthree from '../../assets/latest2.png'
import latestfour from '../../assets/latest3.png'
import latestfive from '../../assets/last.png'
import { FaSearchPlus } from "react-icons/fa";



const Latest = () => {
    return (
        <>
            <section id='latest'>
                <Container>
                    <Row>
                        <Col lg={12} className='latest-top'>
                            <h2>Latest Work</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="leftone">
                                <img src={latestone} alt="" />
                                <div className="icons">
                                    <FaSearchPlus />
                                </div>
                            </div>
                            <div className="lefttwo">
                                <img src={latesttwo} alt="" />

                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="leftone">
                                <img src={latestthree} alt="" />
                            </div>
                            <div className="lefttwo">
                                <img src={latestfour} alt="" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="leftone">
                                <img src={latesttwo} alt="" />
                            </div>
                            <div className="leftone">
                                <img src={latestfive} alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Latest