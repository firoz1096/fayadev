import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";

import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";

const projects = [
  
  {
    id: 1,
    title: "Moon Travel",
    description: "Flight & Hotel Bookings",
    image: project2,
    link: "https://example.com/project-2",
  },
  {
    id: 2,
    title: "Seven Oceans Travel",
    description: "Destinations Worldwide",
    image: project3,
    link: "https://example.com/project-3",
  },

  {
    id: 3,
    title: "SAI ENTERPRISES",
    description: "Telecommunication Tower Installation",
    image: project1,
    link: "https://example.com/project-1", // project link
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container mt-3">
       <div className="text-center"> <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Recent Work</h2>
      
        
        </div>

        <div className="row g-4 mt-2">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 mt-4 mb-4" key={project.id}>
              <Link 
                to={project.link} 
                target="_blank"
                className="d-block" 
              >
                <img
                  className="img-fluid mb-2"
                  src={project.image}
                  alt={project.title}
                />
              </Link>

              <div className="mt-2">
                <h5>{project.title}</h5>
                <p className="text-muted m-0">{project.description}</p>
                <Link 
                  to={project.link} 
                  target="_blank">
                   <span> <FiLink/> {project.link}</span>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
