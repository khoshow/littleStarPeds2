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
      name: "Michelle Hernandez",
      location: "USA",
      rating: 5,
      content:
        "Ameeta is absolutely amazing. She really cares about her patients and will take the extra time to make sure everything is addressed. Gone are the days of never being able to get ahold of a pediatrician and having to schedule appointments weeks out.",
      color: "#B67DFF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 2,
      name: "Anna M.",
      location: "USA",
      rating: 5,
      content:
        "We love coming here! As a new mom, I always have so many questions and Ameeta always takes the time to explain everything to me. The staff are friendly, personable and make you feel like family! I would highly recommend this place!",
      color: "#FFBC3A",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 3,
      name: "Hannah Wilmot",
      location: "USA",
      rating: 5,
      content:
        "It’s really hard to find good care in Arizona. When it comes to your baby you really strive to find the best out there. Ameeta is the seriously best Pediatrician! I regret not bringing my daughter here from the beginning.",
      color: "#49E5EF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 4,
      name: "Netia",
      location: "USA",
      rating: 5,
      content:
        "The best pediatric office! Staff here is so nice and helpful whenever needed. Cancelling and scheduling appointments is easy and convenient and the office is very responsive. My son has been going here for 2 years and any time he was ever sick, FNP Chowdhary was helpful and gave me reassurance. Coming here is a joy.",
      color: "#8F6BF6",
      icon: "/images/icon/icon_42.svg",
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {testimonialData.map((testimonial) => (
        <div
          className="container"
          key={testimonial.id}
          style={{ margin: "0 2rem" }}
        >
          <div className="item">
            <div className="feedback-block-four position-relative">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img src={testimonial.icon} alt="icon" />
              </div>
              <p className="tx-dark">{testimonial.content}</p>
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="name fs-20 fw-500 m0 tx-dark">
                  {testimonial.name}
                  
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
