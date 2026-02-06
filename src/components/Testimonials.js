import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { RiSingleQuotesL, RiSingleQuotesR  } from "react-icons/ri";
import avtar from '../assets/images/avtar.jpg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Guru Nanga Swamy",
    role: "CEO, Tech Startup",
    image: avtar,
    text: "Working with Firoz was a great experience. He clearly understood our requirements and delivered a clean, modern website that exceeded our expectations. Communication was smooth and deadlines were always met.",
  },
  {
    name: "Apur Karen",
    role: "Author & Entrepreneur",
    image: avtar,
    text: "Firoz transformed our ideas into a fast, responsive, and visually appealing website. His attention to detail and frontend expertise really helped elevate our online presence.",
  },
  {
    name: "Abdullah Saleh",
    role: "Travel agent",
    image: avtar,
    text: "Highly professional and skilled frontend developer. The project was delivered on time with excellent code quality and performance. I would definitely recommend him for any web development work.",
  },
  {
    name: "Raushan Kumar",
    role: "Product Manager",
    image: avtar,
    text: "Firoz is proactive, reliable, and very easy to work with. He quickly adapted to our design system and helped us launch features smoothly without any issues.",
  },
  {
    name: "Alan Nichol",
    role: "Startup Founder",
    image: avtar,
    text: "From concept to deployment, the entire process was seamless. The final website looks great on all devices and performs extremely well. Truly impressed with the results.",
  },
  {
    name: "Vivek Singh",
    role: "UX Designer",
    image: avtar,
    text: "As a designer, I really appreciated Firoz’s ability to convert designs into pixel-perfect, responsive layouts. His frontend skills and collaboration made the project a success.",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonials-section py-5">
      <div className="container position-relative mb-3">

          <div className="text-center mb-4">
    
          <h1 className="text-white">Testimonials</h1>
          <p className="text-white">People I've worked with have said some nice things.</p>
        </div>

        {/* Navigation left and right arrows */}
        {/* <div className="testimonial-nav">
          <button ref={prevRef} className="testimonial-prev">‹</button>
          <button ref={nextRef} className="testimonial-next">›</button>
        </div> */}

<Swiper
  modules={[Autoplay, Pagination, Navigation]}
  slidesPerView={3}
  spaceBetween={30}
  centeredSlides={true}  // This will make the middle slide "active"
  loop
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }} //bullets dot dot
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  navigation
  breakpoints={{
    0: { 
      slidesPerView: 1,
      centeredSlides: true  // Center on mobile too
    },
    768: { 
      slidesPerView: 2,
      centeredSlides: false  // Don't center when showing 2
    },
    992: { 
      slidesPerView: 3,
      centeredSlides: true  // Center when showing 3
    },
  }}
  className="testimonial-swiper"
>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="testimonial-slide">
                  <div
                    className={`testimonial-card ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <span className="quote-icon"><RiSingleQuotesL /></span>

                    <div className="avatar-wrapper mx-auto">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <h5 className="mt-3 mb-1">{item.name}</h5>
                    <p className="role">{item.role}</p>

                    <p className="testimonial-text">{item.text}</p>

                    <span className="quote-icon end"><RiSingleQuotesR /></span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
