import Head from "next/head";
import Link from "next/link";
// import LoginForm from "../components/common/LoginForm";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";

const Unsuccess = () => {
  const head = () => {
    const title = "Submit || Little Star Pediatrics";
    const metaDesc =
      "Message unsuccessfully sent  | Little Star Pediatrics!✨";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "new-registration/unsuccessful";
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
  const currentYear = new Date().getFullYear();
  return (
    <>
      {head()}
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <DefaulHeader />
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">
              Form couldnt be sent. Please try again.
            </h2>
            <p>If you are not able to send, please report it to us.</p>
          
            <Link
              href="/forms/New-Registration"
              className="btn-red fw-500 tran3s m-2"
            >
              Registration
            </Link>
            <Link href="/" className="btn-red fw-500 tran3s m-2">
              Home
            </Link>
          </div>
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">
          Copyright @{currentYear} Little Star Pediatrics
        </p>
        <img
          src="/images/myImages/logo.png"
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

export default Unsuccess;
