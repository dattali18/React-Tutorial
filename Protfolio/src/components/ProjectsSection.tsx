import { LazyLoadImage } from "react-lazy-load-image-component";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

import "./Style/projects.css";

export default function ProjectsSection() {
  return (
    <>
      <div className="projects section-padding" id="projects">
        <div className="about-main-container">
          <div className="about-header">
            <h2>
              <span className="section-title">Projects</span>
              <span className="section-description">
                Here you will find some of the personal and school projects that
                I created with each project containing its own info and
                experience
              </span>
            </h2>
          </div>
          <div className="project-content">
            <Project
              title="Ray Tracing Engine"
              desc="This project is an implementation of a ray tracing engine in Java, this was the practical project of a school course of 'Software Engineering'."
              img={project1}
              href="https://github.com/dattali18/Ray-Tracing-Engine"
            />
            <Project
              title="Course Management"
              desc="This project is a course management app in iOS implemented using SwiftUI and UIKit."
              img={project2}
              href="https://github.com/dattali18/UX-Prototype"
            />
            <Project
              title="Portfolio"
              desc="This is a web dev project of my portfolio in HTML CSS TS, using the React framework."
              img={project3}
              href="https://github.com/dattali18/React-Tutorial"
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface ProjectProps {
  title: string;
  desc: string;
  img: string;
  href: string;
}

function Project({ title, desc, img, href }: ProjectProps) {
  return (
    <>
      <div className="project-row">
        <div className="project-row-img-cont">
          <LazyLoadImage
            src={img}
            width="600px"
            alt="Software Screenshot"
            className="project-row-img"
          />
        </div>
        <div className="project-row-content">
          <h3 className="project-row-content-title">{title}</h3>
          <p className="project-row-content-desc">{desc}</p>
          <a href={href} className="btn-lg" target="_blank">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
