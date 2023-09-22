import Link from "next/link";
import Head from "next/head";
import LoginForm from "../components/common/LoginForm";
import Seo from "../components/common/Seo";

const LogIn = () => {
  const head = () => {
    const title = "Confirmation page || Little Star Peds";
    const metaDesc =
      "Confirmation page Little Star Peds"
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL =websiteUrl+"confirmation"
    const websiteName = "Little Star Peds";
    const imageUrl = websiteUrl + "images/myImages/logo.png";

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

  const currentYear = new Date().getFullYear();
  return (
    <>
       {head()}
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <img src="/images/myImages/logo.png" alt="" width={210} />
              </Link>
            </div>
        
            <Link href="/" className="go-back-btn fw-500 tran3s">
              Go to home
            </Link>
           
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10"> Thank you!</h2>
        
            <p className="fs-20 tx-dark">
            Message sent successfully. We will contact you shortly. Or call us at <a href="tel:(480)-747-0045">(480) 747-0045</a>           
            </p>
            <Link href="/forms/New-Registration" className="go-back-btn fw-500 tran3s m-2 " style={{border:"1px solid black", padding:"0 1rem" }}>
              Registration Page
            </Link>
            <Link href="/" className="go-back-btn fw-500 tran3s m-2" style={{border:"1px solid black", padding:"0 1rem" }}>
              Home
            </Link>
          </div>
     
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">Copyright @{currentYear} LittleStarPeds.</p>
        <img
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one wow fadeInRight"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two wow fadeInLeft"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default LogIn;
