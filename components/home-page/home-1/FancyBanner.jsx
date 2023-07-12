import Link from "next/link";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "About Us",
      mainTitle:
        "Personal, Accessible Pediatric Care is Now Available in Avondale",
      description:
        "Little Star Pediatrics provides personalized and accessible healthcare to children from birth to age 20. Each child’s health and their parent’s peace of mind is our priority as we provide services ranging from preventive health care, such as well-child checks and immunizations, to diagnosing and treating acute and chronic illnesses. We assure you that we provide a friendly and comfortable environment that revolves around a trusting provider-patient relationship. Childhood health is the foundation of a long and healthy life. Children go through ongoing growth and development until age 21, which is why we believe that a healthy childhood will lead to healthy adulthood. Here at Little Star Pediatrics, we take honor in providing your child with personalized care focusing on their physical growth, emotional well-being, and psycho-social health.",
      buttonLabel: "",
      illustration: "/images/myImages/pediatrician.jpg",
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
