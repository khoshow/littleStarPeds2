import Seo from "../../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar from "./service-details/ProgressBar";
import Faq from "../../components/home-page/home-2/Faq";
import Social from "./service-details/Social";
import Link from "next/link";
import Servicescategory from "../../components/services/ServiceSide";
import Service from "../../components/home-page/home-1/Service";
import ContactBanner from "../../components/home-page/home-1/ContactBanner";

const PortfolioV1 = () => {
  const head = () => {
    const title = "Contact || Little Star Pediatrice";
    const metaDesc =
      "Contact Page for Little Star Pediatrics✨";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "contact";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/asthma.png";

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
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}

      {/* 
			=============================================
				Service Details
			============================================== 
			*/}
      <div className="serviceBackgroundGrey">
        <div className="service-details position-relative mb-170 pt-80 md-mt-50 lg-mb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-lg-1">
                <div className="service-details-meta ps-lg-5">
                  <h1 className="main-title tx-dark mb-30">
                    PHYSICAL EXAMS in Avondale and Surrounding Communities
                  </h1>
                  <p>
                    Physical exams are a vital part of making a diagnosis when
                    your child&apos;s unwell. Physical exams can help prevent ill
                    health in children by catching problems early. Having a
                    healthy lifestyle is important for children. A routine
                    physical exam can help catch problems early, before they
                    become serious. It&apos;s important to have your child examined
                    by a doctor regularly, even if they seem healthy.
                  </p>
                  <p>
                    If your child needs an exam, Ameeta Chowdhary, MSN, FNP-C,
                    of Little Star Pediatrics in Avondale, Arizona, carries out
                    expert physical exams for children of all ages. Ameeta is a
                    highly experienced family nurse practitioner who specializes
                    in children’s health, so call Little Star Pediatrics today
                    to find out how she can help.
                  </p>
                  <img
                    src="/images/myImages/AmeetaAndGirl.jpg"
                    alt="Nurse Ameeta and a girl"
                    className="main-img-meta"
                  />
                 
                </div>
                <div className="col-lg-5 ms-auto text-center text-lg-end">
                  <Link
                    href="tel:480-747-0045"
                    className="btn-twentyOne fw-500 tran3s"
                  >
                    Call Us
                  </Link>
                </div>
                {/* /.service-details-meta */}
              </div>
              {/* End .col-xl-9 */}
              <Servicescategory />
            </div>
          </div>
        </div>
        {/* /.service-details */}
        {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
        <div className="slider-wrapper p-30">
          <div className="row">
            <Service />
          </div>
        </div>

        <ContactBanner />
        {/* /.fancy-short-banner-sixteen */}
        {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      </div>
      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
