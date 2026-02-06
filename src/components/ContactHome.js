import CustomInputField from "../components/controls/CustomInputField";
import { useState } from "react";
import { FiMapPin, FiMail, FiClock, FiPhone } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";

export default function ContactHome() {
  /* ===== EmailJS Config ===== */
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_SECOND;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  /* ===== Validation ===== */
  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid (must be 10–15 digits)";
    }

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    return newErrors;
  };

  /* ===== Submit via EmailJS ===== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSuccessMsg("Your message has been sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container mt-3">
        <div className="text-center">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="row mt-2">
          <div className="col-lg-7 mb-b mb-md-0">

            {successMsg && (
              <div className="alert alert-success text-center">
                {successMsg}
              </div>
            )}

            <form className="row" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <CustomInputField
                label="Name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                errors={errors}
                setErrors={setErrors}
                setFormData={setFormData}
                colClass="col-md-12 mt-3"
              />

              {/* Phone */}
              <CustomInputField
                label="Phone"
                type="number"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                errors={errors}
                setErrors={setErrors}
                setFormData={setFormData}
                colClass="col-md-6 mt-3"
              />

              {/* Email */}
              <CustomInputField
                label="Email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                errors={errors}
                setErrors={setErrors}
                setFormData={setFormData}
                colClass="col-md-6 mt-3"
              />

              {/* Message */}
              <div className="col-12 mt-3 mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Submit */}
              <div className="col-12 d-flex gap-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled={loading}
                >
                  <RiSendPlaneFill />
                  {loading ? " Sending..." : " Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info (unchanged) */}
          <div className="col-lg-4 offset-md-1">
                  
            <div className="row">


                    {/* Phone */}
                    <div className="col-12 mt-5">
                      <div className="d-flex align-items-center">
                        <span className="me-3 rounded p-3 c_icon">
                          <FiPhone className="text-white fs-4" />
                        </span>
                        <div>
                          <h5>Phone</h5>
                          <p className="m-0"> +91 7275591984</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                     <div className="col-12 mt-4">
                      <div className="d-flex align-items-center">
                          <span className="me-3 rounded p-3 c_icon">
                          <FiMail className="text-white fs-4" />
                        </span>
                        <div>
                          <h5>Email</h5>
                          <p className="m-0">firoz.webdesigner@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                     <div className="col-12 mt-4">
                      <div className="d-flex align-items-center">
                        <span className="me-3 rounded p-3 c_icon">
                          <FiClock className="text-white fs-4" />
                        </span>
                        <div>
                          <h5>Timing</h5>
                          <p className="m-0"> 10 AM to 7 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                     <div className="col-12 mt-4">
                      <div className="d-flex align-items-center">
                        <span className="me-3 rounded p-3 c_icon">
                          <FiMapPin className="text-white fs-4" />
                        </span>
                        <div>
                          <h5>Location</h5>
                          <p className="m-0">Uttar Pradesh, India</p>
                        </div>
                      </div>
                    </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
