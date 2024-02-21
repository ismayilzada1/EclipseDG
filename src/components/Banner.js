import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/eclipse.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Flexible Solutions"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Eclipse Website</span>
                <h1>{`Providing`} <span className="txt-rotate"  data-rotate='[ "Flexible Solutions" ]'><span className="wrap">{text}</span></span></h1>
                  <p>EclipseDG is your trusted partner in cutting-edge software solutions. With a focus on innovation and excellence, we deliver tailored software solutions designed to propel your business forward. From custom software development to scalable enterprise solutions, EclipseDG harnesses the latest technologies to meet your unique needs. Our team of experienced professionals is dedicated to providing top-notch services that optimize efficiency, streamline processes, and drive growth. Partner with EclipseDG today and unlock the full potential of your business.</p>

                  <button>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                  <div  className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img className={"eclipse-logo"} src={headerImg} alt="Header Img"/>
                  </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
