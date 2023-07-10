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
                  ASTHMA treatment in Phoenix, Estrella, Litchfield Park,
                  Avondale, and Surrounding Communities
                </h1>
                <p >
                  It can be a terrifying experience to see your child struggling
                  to draw breath during an asthma attack. When a child is having
                  an asthma attack, their airways constrict and it becomes
                  difficult for them to breathe. If you are with your child
                  during an asthma attack in Phoenix and surrounding areas, the
                  best thing you can do is remain calm and bring them to see
                  Ameeta Chowdhary, MSN, FNP-C, of Little Star Pediatrics in
                  Avondale, Arizona.
                </p>
                <img
                  src="/images/media/img_95.jpg"
                  alt="media"
                  className="main-img-meta"
                />
                <p>
                  Our paediatrician can help you find ways to manage your
                  child’s asthma and reduce the frequency and severity of their
                  attacks. Ameeta is a highly experienced family nurse
                  practitioner who specializes in children’s health, so call
                  Little Star Pediatrics today to find out how she can help.
                </p>
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
