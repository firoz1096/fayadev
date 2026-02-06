import devloper from "../assets/images/developer.png"; 
// import devlopermb from "../assets/images/developer-mb.png"; 
import GetAQuote from "./GetAQuote";

export default function HomeCoverContent() {
  return (
    <div className="container">
      <div className="row cover-row">

        {/* LEFT COLUMN */}
        <div className="col-md-6 d-flex align-items-end align-items-md-center">
          <div className="cover_wrapper">
            <div className="hello_i">Hello I'm</div>
            <div className="firoz_i">Firoz Khan</div>
            <div className="web_developer">
              Web Designer & Frontend Developer
            </div>

            <div className="description">
              <p>
                I'm a expert web design and Web development focused on clean & user-friendly experiences, I am experiences about building excellent Websites that improves the lives of those around me.
              </p>
            </div>

            <div className="mt-4">
              <GetAQuote />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6 d-flex align-items-starts align-md-items-end justify-content-center">
          <img className="img-fluid developer-img" src={devloper} alt="developer" />
           {/* <img className="img-fluid developer-img hide_desktop" src={devlopermb} alt="developer" /> */}
        </div>

      </div>
    </div>
  );
}
