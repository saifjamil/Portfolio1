import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import footleftimg from '../../assets/Vector.png'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="foot-left">
                                <img src={footleftimg} alt="" />
                                <p>Saif Jamil</p>
                            </div>
                        </Col>
                        <Col lg={{span:6, offset:1}}>
                            <div className="foot-right">
                                <div className="link">
                                    <a href="https://github.com/saifjamil" target='/'>GitHub</a>
                                    <a href="https://www.facebook.com/saifjamil51" target='/'>FaceBook</a>
                                    <a href="https://www.instagram.com/saif_jamil_252/">Instagram</a>
                                </div>
                                <div className="copyright">
                                    <p>Copyright. Portfolio 2024</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer