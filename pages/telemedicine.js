import Seo from "../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Telemedicine from "../components/home-page/home-1/Telemedicine"
import TelemedicineFancyBlock from "../components/home-page/home-1/TelemedicineFancyBlock"

const PortfolioV1 = () => {
  const head = () => {
    const title = "Telemedicine || Little Star Pediatrics";
    const metaDesc =
      "Get expert Pediatric Telemedicine care in Arizona - convenient, accessible, and reliable. Schedule your visit now!";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "services/telemedicine";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/online-assistance.avif";

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
      <Seo pageTitle="Service Details" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      <div className="fancy-feature-twentyThree mt-35 backgroundBlue">
        <Telemedicine />
    
        <div className="container">
          <div className="border-top">
            <div className="row gx-xxl-5">
              <TelemedicineFancyBlock />
              
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
