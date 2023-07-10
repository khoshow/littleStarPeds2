import Seo from "../../components/common/Seo";
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
  return (
    <>
      <Seo pageTitle="Service Details" />
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
                    ENT Care in Avondale, AZ
                  </h1>
                  <p>
                    ENT or ear, nose, and throat medicine is a specialty that
                    children quite often require as they’re susceptible to ear
                    and throat infections and other ENT conditions. Ameeta
                    Chowdhary, MSN, FNP-C, of Little Star Pediatrics in
                    Avondale, Arizona, can help your child by accurately
                    diagnosing the cause of their illness and providing
                    effective treatment solutions. Ameeta is a highly
                    experienced family nurse practitioner who specializes in
                    children’s health, so call Little Star Pediatrics today to
                    find out more.
                  </p>
                  <img
                    src="/images/media/img_95.jpg"
                    alt="media"
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
