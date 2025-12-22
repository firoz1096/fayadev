import AboutUs from "../assets/images/about-us.jpg"; 


export default function AboutHome() {
 
  const skills = [
    { name: "UI / UX Design / Web Design / Photoshop", value: 85 },
    { name: "HTML / CSS / Sass / Bootstrap", value: 90 },
    { name: "React.js / Node.js / Express / Github", value: 65 },
    { name: "Javascript / jQuery", value: 70 },
    { name: "PostgreSQ / MongoDb ", value: 50 },
    { name: "GoDaddy / Render / Netlify ", value: 55 },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
  

          <div className="col-lg-6 mb-3 mt-lg-5 mb-lg-5 offset-lg-1 order-lg-2">
            <span className="section-subtitle">About</span>
            <h2 className="section-title">Why You Hire Me?</h2>

            <p className="section-desc">
           I’m a web designer and frontend developer with 7 years of frontend experience and 5 years in web design. I work with agencies, startups, and clients to create responsive, user-friendly, and visually polished web experiences. Curious by nature and detail-driven, I’m always refining my design and code.

            </p>

            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span className="percent">{skill.value}%</span>
                </div>

                <div className="progress custom-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
          </div>

              <div className="col-lg-5 mb-3 mt-lg-5 mb-lg-5 order-lg-0">
              <img className="img-fluid" src={AboutUs} alt="" />

            </div>
        </div>
      </div>
    </section>
  );
}
