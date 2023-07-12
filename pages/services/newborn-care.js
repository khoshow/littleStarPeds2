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
                    NEWBORN CARE in Phoenix (Arizona), and Surrounding
                    Communities
                  </h1>
                  <p>
                    Welcome to our paediatrician service for new parents! Having
                    a baby is one of the most joyous occasions, but your
                    experience of early motherhood is likely to be even better
                    if you have an experienced medical professional supporting
                    you through your first weeks and months. Ameeta Chowdhary,
                    MSN, FNP-C, of Little Star Pediatrics in Avondale, Arizona,
                    can provide exactly the support you need as well as expert
                    newborn care. Ameeta is a highly experienced family nurse
                    practitioner who specializes in children’s health, so call
                    Little Star Pediatrics today to find out how she can help.
                  </p>
                  <img
                    src="/images/media/img_95.jpg"
                    alt="media"
                    className="main-img-meta"
                  />
                  <p>
                    Our paediatrician service is designed to provide comfort and
                    good care for your newly born baby. We understand that being
                    a new parent can be overwhelming, so our experienced team is
                    here to help you every step of the way. Whether it&apos;s your
                    first child or your fifth, we will work with you to ensure
                    that your experience is positive and memorable.
                  </p>
                  <p>Thank you for choosing us!</p>
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
