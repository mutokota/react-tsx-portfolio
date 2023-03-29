/* eslint-disable jsx-a11y/alt-text */
import "../CSS/home/home.css";
import FadeInUp from "../COMPONENT/FadeInUp";
import Image from "../COMPONENT/Image";

export const Home = () => {

  
  return (
    <section>
      <FadeInUp>
        <div id="main">
          <h1 id="fadein">MUTO KOTA</h1>
          <Image />
        </div>
      </FadeInUp>
    </section>
  );
};

export default Home;
