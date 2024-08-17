import Head from "next/head";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Testimonials from "../components/home-page/home-1/TestimonialsPage"


const PortfolioV1 = () => {
  const head = () => {
    const title = "Testimonials || Little Star Pediatrics";
    const metaDesc =
      "Read what our patients and parents have to say about our pediatric care in Arizona! Schedule a consultation today!";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "testimonials";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/ameeta.jpg";

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
      <div className="fancy-feature-twentyThree mt-35 backgroundBlue">
        <Testimonials />
    
        
      </div>

      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
