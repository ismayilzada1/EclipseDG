import team_member1 from "../assets/img/team/team-member1.jpeg";
import team_member2 from "../assets/img/team/team-member2.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Team = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Team</h2>
                        <p>Welcome to our world of excellence, where a seasoned and dedicated team awaits to surpass your expectations.<br></br> Immerse yourself in a seamless experience with our exceptional features and unparalleled customer service, ensuring your satisfaction in no time.</p>
                        <div responsive={responsive} infinite={true} className="team-container owl-theme skill-slider justify-content-center">
                            <div className="item">
                                <img src={team_member1} className={"rounded-circle"} alt="Image" />
                                <h5>Mahammad Ismayilzada</h5>
                            </div>
                            <div className="item">
                                <img src={team_member2} className={"rounded-circle"} alt="Image" />
                                <h5>Ahmad Ahmadzada</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
