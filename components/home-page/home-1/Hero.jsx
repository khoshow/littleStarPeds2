import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-300 tx-white">
              Finally, You have a  <span style={{ color: "#483D8B" }}>New Choice</span> for Modern, Innovative Pediatric Care
            </h1>
            <p className="text-lg mt-45 mb-50 lg-mt-30 lg-mb-40">

            </p>
            <div className="">
              <div className="text-center xs-mt-40">
                <Link
                  href="tel:(480) 747-0045"
                  className="btn-twentyTwo fw-500 tran3s m-2"
                  data-aos=""
                >
                  (480) 747-0045
                </Link>
                <Link
                  href="/forms/New-Registration"
                  className="btn-twentyTwo fw-500 tran3s m-2"
                  data-aos=""
                >
                  Registration
                </Link>
              </div>
              <div className="text-center xs-mt-40">
                <Link
                  href=""
                  className="btn-red fw-500 tran3s m-2"
                  data-aos=""
                >
                  After Hours Phone
                </Link>

              </div>
            </div>

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span style={{ color: "white" }}>Pediatric Care serving Avondale and Glendale.</span>
              </div>
              <div align-items-center>


                <a href="https://www.facebook.com/LittleStarPediatrics/"
                ><Image src="/images/icon/fb.png" alt="" className="me-1 m-2" width={"40"} height={"40"} />
                </a>
                <a href="https://www.instagram.com/little_star_pediatrics/"
                ><Image src="/images/icon/insta.png" alt="" className="me-1 m-2" width={"40"} height={"40"} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={1000}
        src="/images/myImages/young-mother.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        fill
      />
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="boom-container second">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      {/* <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      /> */}
    </div>
  );
};

export default Hero1;
