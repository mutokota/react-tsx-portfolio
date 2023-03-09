/* eslint-disable jsx-a11y/alt-text */
import "../CSS/home.css";
import FadeInUp from "../COMPONENT/FadeInUp";
import imgBack from "../img/backimg.jpg";
import imgBack2 from "../img/backimg2.png";
import imgBack3 from "../img/backimg3.jpg";
import imgBack4 from "../img/backimg4.jpg";

export const Home = () => {

  return (
    <section>
      <FadeInUp>
        <div id="main">
          <h1 id="fadein">MUTO KOTA</h1>
          <div id="img">
            <div className="imgs">
              <img src={imgBack} />
            </div>
            <div className="imgs2">
              <img src={imgBack2} />
            </div>
            <div className="imgs3">
              <img src={imgBack3} />
            </div>
            <div className="imgs4">
              <img src={imgBack4} />
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};

export default Home;
