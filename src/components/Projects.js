import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/gradient2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "DriveSalez",
      description: "Car Sale Website",
      imgUrl: projImg1,
      url:"https://drivesalez.site"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to our Projects showcase! In this section, we present a curated collection of our latest endeavors, each one a testament to our passion for innovation and creativity. Dive into the world of Eclipse, our cutting-edge Car Sale Website project, and explore how we blend technology with craftsmanship to deliver exceptional results. Join us on this journey as we push the boundaries of possibility and redefine excellence in every project we undertake.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/*<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">*/}
                  {/*  <Nav.Item>*/}
                  {/*    <Nav.Link eventKey="first">Tab 1</Nav.Link>*/}
                  {/*  </Nav.Item>*/}
                  {/*  <Nav.Item>*/}
                  {/*    <Nav.Link eventKey="second">Tab 2</Nav.Link>*/}
                  {/*  </Nav.Item>*/}
                  {/*  <Nav.Item>*/}
                  {/*    <Nav.Link eventKey="third">Tab 3</Nav.Link>*/}
                  {/*  </Nav.Item>*/}
                  {/*</Nav>*/}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className={"justify-content-center"}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
