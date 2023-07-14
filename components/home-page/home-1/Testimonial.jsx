import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialData = [
    {
      id: 1,
      name: "Lorena R",
      location: "",
      rating: 5,
      content:
        "My daughter felt very comfortable on her first visit. She seems very good with kids, she explains everything throughly and most of all listened to my concerns.",
      color: "#B67DFF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 2,
      name: "Netia",
      location: "",
      rating: 5,
      content:
        "The best pediatric office! Staff here is so nice and helpful whenever needed. Cancelling and scheduling appointments is easy and convenient and the office is very responsive.",
      color: "#FFBC3A",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 3,
      name: "Heather G.",
      location: "",
      rating: 5,
      content:
        "We are so happy to have found Nurse Practitioner Ameeta! She is so caring and thorough. It is worth the drive to have her care for my kids.",
      color: "#49E5EF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 4,
      name: "Anna M.",
      location: "",
      rating: 5,
      content:
        "We love coming here! As a new mom, I always have so many questions and Ameeta always takes the time to explain everything to me. The staff are friendly, personable and make you feel like family! I would highly recommend this place!",
      color: "#8F6BF6",
      icon: "/images/icon/icon_42.svg",
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
   
        {testimonialData.map((testimonial) => (
          <div className="container" key={testimonial.id} style={{ margin: "0 2rem" }}>
            <div className="item" >
              <div className="feedback-block-four position-relative">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <img src={testimonial.icon} alt="icon" />
                </div>
                <p className="tx-dark">{testimonial.content}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="name fs-20 fw-500 m0 tx-dark">
                    {testimonial.name}
                    <span className="fw-normal opacity-50 fs-16">
                      {testimonial.location}
                    </span>
                  </h6>
                  <ul className="style-none d-flex rating">
                    {[...Array(testimonial.rating)].map((star, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  className="ribbon position-absolute"
                  style={{ background: testimonial.color }}
                />
              </div>
            </div>
          </div>
        ))}
    
    </Slider>
  );
};

export default Testimonial;
