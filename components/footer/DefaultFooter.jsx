import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative backgroundDarkBlue">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img src="/images/myImages/logo.png" alt="brand" />
                </Link>
              </div>
              <div>
              <br></br>
                <ul className="style-none">
                  <li style={{ color: "white", fontSize: "0.8em" }}>
                    10575 W. Indian School Rd, Suite E-103, <br></br>
                    Avondale, AZ 85392
                  </li><br></br>
                  <li style={{ color: "white", fontSize: "0.8em" }}>
                    Phone(appointments):
                    <a href="tel:480-747-0045">&nbsp; 480-747-0045</a>
                  </li>
                  <li style={{ color: "white", fontSize: "0.8em" }}>
                    Email: &nbsp;
                    <a
                      href="mailTo:info@littlestarpeds.com"
                      style={{ color: "white" }}
                    >
                      info@littlestarpeds.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <img
        src="/images/shape/shape_173.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default DefaultFooter;
