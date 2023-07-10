import Social from "../../pages/services/service-details/Social";

const Servicescategory = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0 dontShowMobileView ">
      <div className="service-sidebar pe-xxl-5 md-mt-60">
        <div className="sidebar-quote mb-50">
          <img
            src="/images/myImages/ameeta.jpg"
            alt="icon"
            className="m-auto"
            style={{ borderRadius: "50%" }}
          />
          <p className="fw-500">Ameeta Chowdhary, MSN-FNP-C</p>
          <div className="name">
            {" "}
            Family Nurse Practitioner located in Avondale, AZ Little Star
            Pediatrics
          </div>
        </div>
        <div className="service-category mb-40 redBackground">
          <h4 className="tx-dark mb-15">Services</h4>
          <ul className="style-none">
            <li className="current-page">
              <a href="/services/asthma">Asthma</a>
            </li>
            <li>
              <a href="/services/cold-and-flue">Cold and Flu</a>
            </li>
            <li>
              <a href="/services/counseling">Counseling</a>
            </li>
            <li>
              <a href="/services/ent">ENT</a>
            </li>
            <li>
              <a href="/services/newborn-care">Newborn Care</a>
            </li>
            <li>
              <a href="/services/physical-examinations">Branding</a>
            </li>
            <li>
              <a href="/services/preventive-screenings">
                Preventive Screenings
              </a>
            </li>
            <li>
              <a href="/services/wellness-visits">Wellness Visits</a>
            </li>
          </ul>
        </div>
        {/* /.service-category */}

        {/* /.sidebar-quote */}
        <h4 className="tx-dark mb-15">Share it.</h4>
        <Social />
      </div>
      {/* /.service-sidebar */}
    </div>
  );
};

export default Servicescategory;
