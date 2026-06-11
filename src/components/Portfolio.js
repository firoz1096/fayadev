import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";


import visit from "../assets/images/projects/visit.png";
import b2ccozmo from "../assets/images/projects/b2c-cozmo.png";
import moon from "../assets/images/projects/moon.png";
import b2bpct from "../assets/images/projects/b2b-pct.png";
import pct from "../assets/images/projects/pct.png";


const projects = [
  {
    id: 1,
    title: "Visit Dubai",
    category: "UAE based Travel Agency",
    image: visit,
    link: "https://visitdubai.co.in/",

    role: "UI Designer & Full Stack Developer",
    description:
      "Offering Customized Holiday Packages, UAE Activities, and Visa Services.",
    technologies: [
      "React.js",
      "Bootstrap",
      "Sass",
      "Photoshop",
    ],

    enterprise: false,
    b2b: true,
  },

  {
    id: 2,
    title: "Go Cozmo",
    category: "B2C, Travel & Tourism Platform",
    image: b2ccozmo,
    link: "https://www.gocozmo.com/",

    role: "UI Designer & UI Developer",

    description:
      "Comprehensive Travel Services Including Flight Bookings, Holiday Packages, Visa Assistance and UAE Activities.",

    technologies: [
      "Photoshop",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Sass",
      "HTML5",
      "CSS3",

    ],

    enterprise: false,
    b2b: false,
  },

  {
    id: 3,
    title: "Moon Travel",
    category: "Travel Agency Website",
    image: moon,
    link: "https://moontravel.co.in/",

    role: "UI Designer & MERN Stack Developer",

    description:
      "Telecommunication tower installation and infrastructure services.",

    technologies: [
      "React.js",
      "Express",
      "MongoDB",
      "Node.js",
      "Sass",
      "Bootstrap",
      "Photoshop",

    ],

    enterprise: false,
    b2b: false,
  },

  {
    id: 4,
    title: "APP - Travel Technology Solution",
    category: "B2B, Travel & Tourism Platform",
    image: b2bpct,
    link: "https://app.pierofcloudtech.com/",

    role: "Designer & UI Developer",

    description:
      "Flight Tickets Online. Book Air India Flight Tickets, Jet Airways Flight Tickets, Indigo Flight Tickets online at cheap price.",

    technologies: [
      "React.js",
      "Sass",
      "Bootstrap",
      "Photoshop",
      "CSS3",
      "react-icons",
    ],

    enterprise: false,
    b2b: false,
  },


    {
    id: 5,
    title: "Pier of Cloud Tech Inc",
    category: "Travel Technology Solutions Provider",
    image: pct,
    link: "https://pierofcloudtech.com/",

    role: "Designer & UI Developer",

    description:
      "Delivering world-class Travel Technology solutions that builds your brand, business and customer relationship.",

    technologies: [
      "React.js",
      "Sass",
      "Bootstrap",
      "Photoshop",
      "CSS3",
    ],

    enterprise: false,
    b2b: false,
  },



];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container mt-3">
        <div className="text-center">
          <span className="section-subtitle">Portfolio</span>

          <h2 className="section-title">
            Enterprise UI & Frontend Projects
          </h2>

          <p className="text-muted">
            Selected projects showcasing UI Design, Frontend Development,
            Responsive Design and Enterprise Solutions.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {projects.map((project) => (
            <div
              className="col-md-6"
              key={project.id}
            >
              <div className="card border-0 shadow-sm h-100">

                <Link
                  to={project.link}
                  target="_blank"
                  className="d-block"
                >
                  <img
                    className="card-img-top"
                    src={project.image}
                    alt={project.title}
                  />
                </Link>

                <div className="card-body">

                  <h5>{project.title}</h5>

                  <p className="text-primary fw-semibold mb-2">
                    {project.category}
                  </p>

                  <p className="small text-muted">
                    {project.description}
                  </p>

                  <div className="mb-3">
                   
                    <div> <strong>Role:</strong> {project.role}</div>
                  </div>

                  <div className="mb-3">
                 

                    <div className="d-flex flex-wrap gap-2 mt-2">
                         <strong>Technologies:</strong>
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge bg-light text-dark border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <FiLink className="me-1" />
                    View Project
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}