import Seo from "../components/common/Seo";
import Head from "next/head";
import Image from "next/image";
import BlockContact from "../components/contact/BlockContact";

import ContactForm from "../components/contact/NewContact";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import Copyright from "../components/footer/CopyrightFooter2";

const contact = () => {
  const head = () => {
    const title = "Contact || Little Star Pediatrics";
    const metaDesc =
      "Your child deserves the finest pediatric care - contact us to experience our exceptional services and dedicated team. Connect with us now!✨";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "contact-us";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "screening.jpg";

    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={cononicalURL} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        {/* {console.log("Url", process.env.DOMAIN_WEBSITE_URL)} */}
        <meta property="og:site_name" content={websiteName} />
        <meta property="og:image" content={imageUrl} />

        <meta property="og:image:type" content="image/png" />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
    );
  };

  return (
    <>
      {head()}
   
      <DefaulHeader />

      <div className=" paddingTop20vh">
      
        <div className="contact-section-one mt-60 lg-mt-30 ">
          <div className="container">
            <div className="bg-wrapper zn2 position-relative ">
              <div className="row backgroundRed">
                <div className="col-xl-11 m-auto ">
                  <div
                    className="row align-items-center "
                    style={{ padding: "2rem" }}
                  >
                    <div className="col-lg-6 ms-auto order-lg-first ">
                      <div className="text-wrapper">
                        <img
                          src="/images/icon/icon_114.svg"
                          alt="icon"
                          className="lazy-img mb-30"
                        />
                        <div className="title-style-one">
                          <h2 className="main-title fw-500 tx-dark m0">
                            Get in touch with us!
                          </h2>
                        </div>
                        <div className="d-flex">
                          <div className="icon rounded-circle justify-content-center">
                            <Image
                              width={30}
                              height={30}
                              src="/images/icon/icon_147.svg"
                              alt="icon"
                            />
                          </div>
                          <p style={{ color: "white", fontSize: "0.8em" }}>
                            &nbsp;10575 W. Indian School Rd.<br></br> Suite
                            E-103 &nbsp; Avondale, Arizona 85392
                          </p>
                        </div>
                        <br></br>
                        <div className="d-flex">
                          <div className="icon rounded-circle justify-content-center">
                            <Image
                              width={30}
                              height={30}
                              src="/images/icon/phone-call-white.svg"
                              alt="icon"
                           
                            />
                          </div>
                          <a
                            href="tel:tel:(480) 747-0045"
                            style={{ color: "white", fontSize: "0.8em" }}
                          >
                            &nbsp;(480) 747-0045
                          </a>
                        </div>
                        <br></br>
                        <div className="d-flex">
                          <div className="icon rounded-circle justify-content-center">
                            <Image
                              width={30}
                              height={30}
                              src="/images/icon/icon_148.svg"
                              alt="icon"
                            />
                          </div>
                          <p style={{ color: "white", fontSize: "0.8em" }}>
                            &nbsp;info@littlestarpeds.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 order-lg-first">
                      <div className="form-style-two md-mb-40">
                        <ContactForm />
                      </div>
                      {/* /.form-style-two */}
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
      
          </div>

          <Map />
        </div>
      </div>
    
      <DefaultFooter />
    </>
  );
};

export default contact;
