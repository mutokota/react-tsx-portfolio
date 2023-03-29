import "../CSS/img.css";
import imgBack from "../img/backimg.jpg";
import imgBack2 from "../img/backimg2.png";
import imgBack3 from "../img/backimg3.jpg";
import imgBack4 from "../img/backimg4.jpg";

export const Image = () => {
  

  return (
    <div id="img">
      <div className="imgs">
        <img src={imgBack} alt="img1" />
      </div>
      <div className="imgs2">
        <img src={imgBack2} alt="img2" />
      </div>
      <div className="imgs3">
        <img src={imgBack3} alt="img3" />
      </div>
      <div className="imgs4">
        <img src={imgBack4} alt="img4" />
      </div>
    </div>
  );
};

export default Image;
