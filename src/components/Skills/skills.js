import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do ?</span>
      <span className="skillDes">
        I'm a Skilled and pationate web designer and developer with experience
        of developing visually appealing and user-friendly Websites. I have a
        Strong understanding of design and development. I also have expertise in
        Mobile App Developtment.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              I design user-friendly and attractive interfaces to make digital
              experiences easy and enjoyable. My focus is on creating designs
              that not only look good but also ensure a smooth and pleasing
              interaction for
            </p>
          </div>
        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              I am a skilled web application developer proficient in creating
              dynamic and user-friendly online experiences. My expertise lies in
              utilizing various programming languages and frameworks to design
              and implement robust web applications tailored to meet specific
              client needs.
            </p>
          </div>
        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              I excel in the creation of mobile applications, particularly in
              developing user-friendly Android apps using the Kotlin. My
              specialization involves crafting efficient software for
              smartphones, ensuring a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
