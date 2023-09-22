import Link from "next/link";
import Head from "next/head";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "Little Star Pediatrics Telemedicine",
      mainTitle: "Pediatric Telemedicine in Arizona",
      description:
        "Meet me online from anywhere through Video Call. It’s simple and convenient to use.",
      buttonLabel: "",
      illustration: "/images/myImages/online-assistance.avif",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour backgroundBlue pt-100">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="" key={index}>
            <div className="row align-items-center ">
              <div
                className={`col-xl-7 col-lg-7 backgroundBlue order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-light fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
                {data.buttonLabel !== "" && (
                  <Link
                    href="/pages-menu/about-us-v1"
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                  >
                    <span>{data.buttonLabel}</span>
                    <img
                      src="/images/icon/icon_69.svg"
                      alt={data.illustrationAlt}
                      className="ms-2"
                    />
                  </Link>
                )}
                <div className=" xs-mt-40">
                  <Link
                    href="https://doxy.me/littlestar"
                    className="btn-red fw-500 tran3s m-2"
                    data-aos=""
                  >
                    Schedule for telemedicine
                  </Link>
                </div>
              </div>
              <div
                className={`col-xl-5 col-lg-5 col-md-5 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder md-mt-60">
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
