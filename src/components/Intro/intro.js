import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
import bg from "../../assets/image.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello.</span>
        <span className="introText">
          I'm <span className="introName">Mayur</span> <br /> Web and Mobile App
          Developer.
        </span>
        <p className="introPara">
          I'm a skilled web designer and developer with some extra knowledge of
          data science. <br /> I find joy in teaching others about these
          subjects. I'm more into Java and like to explore <br /> new
          technologies.
        </p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
