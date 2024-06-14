import { Container, Col, Row } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ect1 from "../assets/img/ect1.png";
import meter2 from "../assets/img/meter2.png";
import san3 from "../assets/img/san3.png";
import san4 from "../assets/img/san4.png";
import tan5 from "../assets/img/tan5.png";
import san6 from "../assets/img/san6.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Features = () => {
   const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
   };

   return (
    <section className="feature" id="features">
        <Container>
            <Row>
                <Col>
                    <div className="features-bx">
                        <h2>
                            Features
                        </h2>
                        <p>"Our website offers a centralized platform for accessing free<br/>online courses from various sources, providing a one-stop-shop for learning opportunities."</p>
                        <Carousel responsive={responsive} infinite={true} className="feature-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Number of free Courses available</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Courses categories by topic</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>User rating and reviews</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Links to related resourses</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Blockchain integration fro secure transaction</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Easy navigation and user-friendly interface</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image"/>
    </section>
   )
}