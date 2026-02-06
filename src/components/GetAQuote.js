import { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi2";
import emailjs from "@emailjs/browser";



export default function GetQuoteForm() {
  /* ===== EmailJS Config ===== */
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    budget: "",
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const services = [
    "Web & UI Design",
    "Frontend Development",
    "Responsive Design",
    "Landing Page Design",
    "Website Maintenance & Updates",
    "Website Redesign",
    // "Backend Development / API Integration",
    // "Performance Optimization",
    "MERN Stack Development",
    // "Static Website Development",
    // "Dynamic Website Development",
    "Custom Website Development",
    "Other Services",
  ];

  const budget = ["$100-$500", "$500-$2000", "$2000-$5000", "$5000-$10000"];

  /* ===== Captcha ===== */
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);

  useEffect(() => generateCaptcha(), []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${a} + ${b} = ?`);
    setCaptchaAnswer(a + b);
    setFormData((prev) => ({ ...prev, captcha: "" }));
  };



  const validateField = (name, value) => {
  let error = "";

  switch (name) {
    case "name":
      if (!value.trim()) error = "Name is required";
      break;

    case "email":
      if (!value.trim()) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Invalid email address";
      break;

    case "phone":
      if (!value.trim()) error = "Phone is required";
      else if (!/^[0-9]{10}$/.test(value))
        error = "Phone must be 10 digits";
      break;

    case "budget":
      if (!value) error = "Please select a budget";
      break;

    case "captcha":
      if (parseInt(value) !== captchaAnswer)
        error = "Captcha incorrect";
      break;

    default:
      break;
  }

  return error;
};


  /* ===== Validation ===== */
const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim())
    newErrors.name = "Name is required";

  if (!formData.email.trim())
    newErrors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.email = "Invalid email address";

  if (!formData.phone.trim())
    newErrors.phone = "Phone is required";
  else if (!/^[0-9]{10}$/.test(formData.phone))
    newErrors.phone = "Phone must be 10 digits";

  if (!formData.budget)
    newErrors.budget = "Please select a budget";

  if (formData.services.length === 0)
    newErrors.services = "Select at least one service";

  if (parseInt(formData.captcha) !== captchaAnswer)
    newErrors.captcha = "Captcha incorrect";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  /* ===== Handlers ===== */
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // live validation
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: validateField(name, value),
  }));
};


const handleServiceChange = (service) => {
  setFormData((prev) => {
    const updatedServices = prev.services.includes(service)
      ? prev.services.filter((s) => s !== service)
      : [...prev.services, service];

    setErrors((prevErrors) => ({
      ...prevErrors,
      services:
        updatedServices.length === 0
          ? "Select at least one service"
          : "",
    }));

    return {
      ...prev,
      services: updatedServices,
    };
  });
};


  /* ===== Submit via EmailJS ===== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      services: formData.services.join(", "),
      budget: formData.budget,
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
        email: "",
        phone: "",
        services: [],
        budget: "",
        message: "",
        captcha: "",
      });
      generateCaptcha();
      setErrors({});
      setTimeout(() => handleClose(), 1200);
    } catch (error) {
      alert("Failed to send message. Try again!");
      console.error(error);
    }

    setLoading(false);
  };

  const handleClose = () => setIsClosing(true);
  const handleAnimationEnd = () =>
    isClosing && (setShowModal(false), setIsClosing(false));

  /* ===== UI ===== */
  return (
    <>
      <button className="btn btn-lg btn_quote mt-3" onClick={() => setShowModal(true)}>
        Hire Me <HiArrowRight /> 
      </button>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div
            className={`modal-dialog modal-lg modal-dialog-centered animate__animated ${
              isClosing
                ? "animate__slideOutUp animate__faster"
                : "animate__slideInDown animate__faster"
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Want to Hire Me?</h2>
                <button className="btn-close" onClick={handleClose}></button>
              </div>

              <div className="modal-body">
                {successMsg && (
                  <div className="alert alert-success text-center">
                    {successMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="row g-3 align-items-center">
                  <div className="col-lg-6">
                     <label className="form-label">Name</label>
                    <input className={`form-control ${errors.name ? "is-invalid" : formData.name ? "is-valid" : ""}`} name="name"  value={formData.name} onChange={handleChange} />
                    <small className="text-danger">{errors.name}</small>
                  </div>

                  <div className="col-lg-6">
                     <label className="form-label">Email</label>
                    <input className={`form-control ${errors.email ? "is-invalid" : formData.email ? "is-valid" : ""}`} name="email" value={formData.email} onChange={handleChange} />
                    <small className="text-danger">{errors.email}</small>
                  </div>

                  <div className="col-lg-6">
                     <label className="form-label">Phone</label>
                    <input type="number" className={`form-control ${errors.phone ? "is-invalid" : formData.phone ? "is-valid" : ""}`} name="phone" value={formData.phone} onChange={handleChange} />
                    <small className="text-danger">{errors.phone}</small>
                  </div>

                  <div className="col-lg-6">
                  <label className="form-label">Budget</label>
                  <select
                   className={`form-control ${errors.budget ? "is-invalid" : formData.budget ? "is-valid" : ""}`}
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select Budget</option>
                    {budget.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                  <small className="text-danger">{errors.budget}</small>
                </div>


                  <div className="col-12">
                    <label className="form-label">Services</label>
                    <div className="row">
                      {services.map((s, i) => (
                        <div className="col-md-6 col-lg-4" key={i}>
                          <div className="form-check">
                          <input
                            id={`service-${i}`}
                            className="form-check-input"
                            type="checkbox"
                            checked={formData.services.includes(s)}
                            onChange={() => handleServiceChange(s)}
                          />
                          <label htmlFor={`service-${i}`} className="form-check-label">
                            {s}
                          </label>

                          </div>
                        </div>
                      ))}
                    </div>
                    <small className="text-danger">{errors.services}</small>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Additional details</label>
                    <textarea className="form-control" rows="4" name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-6">
                     <label className="form-label">Captcha: {captchaQuestion}</label>
                    <input className="form-control" name="captcha"
                
                      value={formData.captcha}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.captcha}</small>
                  </div>

                  <div className="col-lg-6 text-end">
                    <button className="btn btn-primary btn-lg" disabled={loading}>
                      <RiSendPlaneFill /> {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
