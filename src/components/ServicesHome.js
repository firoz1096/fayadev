import { FiLayout, FiGitBranch } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

export default function ServicesHome() {
 
  const services = [
    {
      icon: <FiLayout />,
      title: "Web/UI/UX Design",
      desc:
        "I design intuitive, visually engaging interfaces that deliver seamless user experiences. Every layout is crafted to balance aesthetics, usability, and business goals.",
    },
    {
      icon: <HiOutlineCode />,
      title: "Frontend Development",
      desc:
        "I build fast, responsive, and scalable user interfaces using modern frontend technologies. My focus is on clean code, performance, and pixel-perfect implementation.",
    },
    {
      icon: <FiGitBranch />,
      title: "Backend Development",
      desc:
        "I develop secure and efficient backend systems that power reliable applications. From APIs to databases, I ensure smooth data flow and scalability.",
    },
  ];

  return (
    <section id="services" className="py-5 service-section bg-light">
      <div className="container mt-5">
        <div className="text-center"> <span className="section-subtitle">Services</span>
            <h2 className="section-title">Service I Provide</h2></div>
        <div className="row g-4 mt-2">
          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card h-100">
                <div className="icon-box">{item.icon}</div>
                <h4 className="service-title">{item.title}</h4>
                <p className="service-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
