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
            <h1 className="hero-heading fw-300 tx-dark">
            Finally, You Have a  <span style={{color:"white"}}>New Choice</span> &amp;  for Modern, Innovative Pediatric Care
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Instant everything. Incredible prices. Big heart.
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
                  href="/registration"
                  className="btn-twentyTwo fw-500 tran3s m-2"
                  data-aos=""
                >
                  Registration
                </Link>
              </div>
              <div className="text-center xs-mt-40">
                <Link
                  href=""
                  className="btn-twentyTwo fw-500 tran3s m-2"
                  data-aos=""
                >
                  After Hours Phone
                </Link>
               
              </div>
            </div>

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>Pediatric Care in Avondale and Glendale.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={2000}
        src="/images/myImages/flat2.webp"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
