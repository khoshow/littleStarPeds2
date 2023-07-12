const AppBanner = () => {
  const features = [
    "American Association of Nurse Practitioners",
    "American Association of Nurses",
    " National Association of Pediatric Nurse Practitioners (NAPNAP)",
    " NAPNAP (National Association of Pediatric Nurse Practitioners) — Arizona Chapter",
  ];



  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
            {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
            <h2 className="main-title fw-500 tx-dark m0">OUR AFFILIATION</h2>
          </div>
         
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
   
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 wow fadeInRight">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <img
            src="images/myImages/flat.avif"
            alt=""
            className="lazy-img main-img ms-auto"
          />
          {/* <img
            src="images/media/img_56.png"
            alt=""
            className="lazy-img screen-two"
          /> */}
          <img
            src="images/myImages/favicon.jpg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          <img
            src="images/myImages/favicon.jpg"
            alt=""
            className="lazy-img shapes shape-two"
          />
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
