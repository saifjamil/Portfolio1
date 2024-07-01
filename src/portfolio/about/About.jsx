import React from 'react'
import './about.css'
import Slider from "react-slick";
import banone from '../../assets/avatar-1.svg'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Container } from 'react-bootstrap';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='nexti'
            onClick={onClick}
        ><GrFormNext /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='agabe1'
            onClick={onClick}
        ><GrFormPrevious /></div>
    );
}


function About() {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows:false,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <section id='about'>
            <Container>
                <h2 className='ab-head'><hr />Clients say about me <hr /></h2>
                <Slider {...settings}>
                    <div className="main">
                        <div className="main-one">
                            <img src={banone} alt="" />
                            <div className="one">
                            <div className="text">
                            <h2>Saif Jamil</h2>
                            <p>Web Developer</p>
                            <a href="#"> See More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                    <div className="main-one">
                            <img src={banone} alt="" />
                            <div className="one">
                            <div className="text">
                            <h2>Tofayel Islam Sazid</h2>
                            <p>App Developer</p>
                            <a href="#"> See More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                    <div className="main-one">
                            <img src={banone} alt="" />
                            <div className="one">
                            <div className="text">
                            <h2>Rifat Ibna Toukir</h2>
                            <p>Froned Web Developer</p>
                            <a href="#"> See More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                    <div className="main-one">
                            <img src={banone} alt="" />
                            <div className="one">
                            <div className="text">
                            <h2>Mewnal Chanda</h2>
                            <p>Junior Python Dveloper</p>
                            <a href="#"> See More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
            </section>
        </>
    )
}

export default About