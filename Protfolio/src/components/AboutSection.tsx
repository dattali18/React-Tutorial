import "./Style/about.css"

export default function AboutSection() {
  return (
    <>
      <div className="about section-padding" id="about">
        <div className="about-main-container">
          <div className="about-header">
            <h2>
              <span className="section-title">About Me</span>
              <span className="section-description">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </span>
            </h2>
          </div>
          <div className="about-content">
            <div className="about-content-main">
              <h3 className="about-content-main-title">Who am I?</h3>
              <div className="about-content-main-details">
                <p className="about-content-main-details-para">
                I am Software Engineering student at JCT (Jerusalem College of Technology) and I’m a very passionate learner and particularly in the computer science field and I’m very excited to learn and share this experience with everyone around me.
                </p>
              </div>
            </div>
            <div className="about-content-skills">
              <h3 className="about-content-main-title">My Skills</h3>
              <div className="about-content-main-skills">
                <Skill name="HTML" />
                <Skill name="CSS" />
                <Skill name="JS" />
                <Skill name="TS" />
                <Skill name="Python" />
                <Skill name="C++" />
                <Skill name="C#" />
                <Skill name="Swift" />
                <Skill name="SwiftUI" />
                <Skill name="UIKit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface SkillProps {
  name: string;
}

function Skill({ name }: SkillProps) {
  return (
    <>
      <div className="skill">{name}</div>
    </>
  );
}
