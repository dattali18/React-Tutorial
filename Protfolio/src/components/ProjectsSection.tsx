import project1 from "../assets/project1.jpeg"
import "./Style/projects.css"

export default function ProjectsSection() {
  return (
    <>
      <div className="projects section-padding" id="projects">
        <div className="about-main-container">
          <div className="about-header">
            <h2>
              <span className="section-title">Projects</span>
              <span className="section-description">
                Here you will find some of the personal and school projects
                that I created with each project containing its own info and experience
              </span>
            </h2>
          </div>
          <div className="project-content">
            <Project
              title="Protfolio"
              desc="Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
              img={project1}
              href="#"
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
          <img
            src={img}
            alt="Software Screenshot"
            className="project-row-img"
            loading="lazy"
          />
        </div>
        <div className="project-row-content">
          <h3 className="project-row-content-title">{title}</h3>
          <p className="project-row-content-desc">{desc}</p>
          <a href={href} className="btn-lg">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
