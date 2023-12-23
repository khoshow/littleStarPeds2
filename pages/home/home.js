import Link from "next/link";
import Head from "next/head";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import Blog from "../../components/home-page/home-1/Blog";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";
import FancyBlock from "../../components/home-page/home-1/FancyBlock";
import FancyBanner from "../../components/home-page/home-1/FancyBanner";
import OfficeHours from "../../components/home-page/home-1/OfficeHours";
import IntroVideo from "../../components/home-page/home-1/IntroVideo";

const Insurance = () => {
  const head = () => {
    const title = "Home || Little Star Pediatrics";
    const metaDesc =
      "Looking for expert pediatric care in Avondale & Glendale? Trust our experienced team to keep your child healthy & happy. Schedule a visit today!✨";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl;
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/AmeetaBoy.jpg";

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
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <Hero />
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <div style={{ backgroundColor: "#29aae1", padding: "1rem" }}>
        <div
          className="card col-md-4 alert-success"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="card-body">
            <h5 className="alert-heading" style={{ textAlign: "center" }}>
              UPDATES
            </h5>
            <p>
              <span className="message">New</span>We are closed for Monday
              December 25. Happy Holidays!
            </p>

            {/* <p style={{ color: "#007BFF" }}>
              <span className="message">New</span> In observance of Independence
              Day, clinics will be closed on July 4th & 5th. Happy holiday!
            </p> */}
            {/* <p style={{ color: "#007BFF" }}><span className="message">New</span> In observance of the Labor Day Holiday, clinic will remain closed on 5th September, Monday. </p>
            <a className="card-link" href="./files/Covid 19.pdf">Updates on Covid-19</a
            ><br /><br />
            <a
              className="card-link"
              href="http://voyagephoenix.com/interview/meet-ameeta-chowdhary-little-star-pediatrics-avondale/"
            >
              In the News: An interview with the founder, Ameeta Chowdhary</a
            >
            <br /><br />
            <a
              className="card-link"
              href="https://www.similacrecall.com/us/en/home.html?utm_campaign=rcl-powder-recall-2022&utm_medium=tag-referral&utm_source=rcl-similac-com&utm_content=rcl-powder-recall-site-banner-click&utm_term=20220217"
            >
              <span className="message">New</span>
              Link to Similac Formula recall information for parents</a
            > */}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f00b42", padding: "1rem" }}>
        <div
          className="card col-md-4 alert-success"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="">
            <img
              src="/images/myImages/Greet.jpg"
              alt="shape"

              // style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
      <div className="newSiteContainer">
        <div className="newSiteBox">
          <h3 className="newSiteCaption">Our clinic at Glendale is now </h3>
          <div className="newSiteTitle">
            <span className="newSiteBlock"></span>
            <h2>
              CLOSED<span></span>
            </h2>
          </div>

          {/* <!-- <div classname="newSiteRole">
              <div className="newSiteBlock"></div>
              <p>Glendale, AZ</p>
          </div> --> */}
          <div></div>
        </div>
      </div>

      <div className="fancy-feature-twentyThree mt-35 backgroundBlue">
        <FancyBanner />
        <div className="container">
          <div className="border-top">
            <div className="row gx-xxl-5">
              <FancyBlock />
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-feature-fifteen  mt-40">
        <img
          src="/images/shape/shape_76.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="container title-style-eight">
          <Banner />
          <IntroVideo />
        </div>
        {/* /.container */}
      </div>
      <div className="fancy-feature-thirtyFive mt-40">
        <div className="bg-wrapper mt-40 pt-40 lg-mt-80 lg-pt-70">
          <div className="container title-style-eight">
            <h2 className="main-title fw-500 mb-40 text-center">Why Us.</h2>
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>

      <div className="fancy-feature-thirtySix pt-100 pb-100 lg-pt-140 backgroundDarkRed">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20 title-style-eight"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 m0 tx-light">
                    Our Services.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      <div className="title-style-eight ">
        <OfficeHours />
      </div>

      <div
        className="feedback-section-eleven position-relative pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-eight text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Testimonials</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven container">
            <Testimonial />
          </div>
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      {/* <img
                        src=""
                        alt="icon"
                        className="lazy-img mb-30"
                      /> */}
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Get in touch with us today.
                        </h2>
                      </div>

                      <Link
                        href="/contact-us"
                        className="btn-twentyTwo fw-300 tran3s m-2"
                      >
                        Call
                      </Link>
                      <Link
                        href="/forms/New-Registration"
                        className="btn-red fw-300 tran3s m-2"
                      >
                        New Registration
                      </Link>
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
            {/* End .row */}

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		 
       
			=====================================================
				Footer
			=====================================================
			*/}
      <DefaultFooter />
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
