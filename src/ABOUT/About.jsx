import FadeInUp from "../COMPONENT/FadeInUp";
import "../CSS/about/about.css";
import Image from "../COMPONENT/Image";

export const About = () => {
  return (
    <FadeInUp>
    <div id="about">
      <section className="about-section">
        <dl className="about-dl">
          <dt>名前:</dt>
          <dd>武藤晃太</dd>
          <dt>生年月日:</dt>
          <dd>2000年6月9日</dd>
          <dt>出身地:</dt>
          <dd>東京都</dd>
          <dt>出身中学校:</dt>
          <dd>墨田区立文花中学校</dd>
          <dt>出身高校:</dt>
          <dd>東京都立足立高等学校</dd>
          <dt>所属していた部活:</dt>
          <dd>バスケットボール部</dd>
          <dt>好きなアーティスト:</dt>
          <dd>尾崎豊・ZARD</dd>
          <dt>趣味:</dt>
          <dd>バスケ・古着巡り・サウナ</dd>
          <dt>将来の目標:</dt>
          <dd>独立をする事・エンジニア育成に携わる事</dd>
        </dl>
      </section>
      <Image />
    </div>
    </FadeInUp>
  );
};

export default About;
