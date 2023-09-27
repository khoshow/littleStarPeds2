import Head from "next/head";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Telemedicine from "../components/home-page/home-1/Telemedicine";
import TelemedicineFancyBlock from "../components/home-page/home-1/TelemedicineFancyBlock";

const Insurance = () => {
  const head = () => {
    const title = "Insurance || Little Star Pediatrics";
    const metaDesc =
      "Need to know if we accept your health insurance? Check out our comprehensive list & safeguard your health";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "insurance";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/baby-girl.webp";

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
      <div className="fancy-feature-twentyThree mt-35 backgroundGrey">
        <div className="container" style={{ paddingTop: "10vh" }}>
          <h1 className="text-center" style={{ padding: "2rem", color: "#f9ba32" }}>
            HEALTH INSURANCE
          </h1>
          <div>
            <h4>
              Little Star Pediatrics currently accepts the following health
              plans:
            </h4>
          </div>
          <div style={{ padding: "2rem", color: "white" }}>
            <ol>
              <li>ACPN – PPO</li>
              <li>AETNA</li>
              <li>
                AHCCCS
                <ul style={{ paddingLeft: "2rem" }}>
                  <li>Indian Health</li>
                  <li>Arizona Complete Health</li>
                  <li>DCS/CMDP</li>
                  <li>Magellan Complete Health</li>
                  <li>Steward Health Choice</li>
                  <li>Mercy Care Complete Care</li>
                  <li>Care 1st</li>
                </ul>
              </li>

              <li>
                ALIERA
                <ul style={{ paddingLeft: "2rem" }}>
                  <li>GYN WELL WOMENS SERVICES</li>
                  <li>PEDIATRIC SERVICES</li>
                  <li>PLUS/PREMIUM (PCP & UC)</li>
                </ul>
              </li>
              <li>AMERIPLAN DISCOUNT CARD</li>
              <li>BLUE CROSS BLUE SHIELD AZ</li>
              <li>CORVEL PPO</li>
              <li>DCS/CMDP</li>
              <li>EVERMED</li>
              <li>FORTIFIED PPO</li>
              <li>GALAXY HEALTH NETWORK PPO</li>
              <li>
                HEALTHSMART
                <ul style={{ paddingLeft: "2rem" }}>
                  <li>ACCEL</li>
                  <li>HPO</li>
                  <li>PPO</li>
                </ul>
              </li>
              <li>
                IHP
                <ul style={{ paddingLeft: "2rem" }}>
                  <li>DISCOUNT CARD</li>
                  <li>PPO</li>
                </ul>
              </li>
              <li>
                MULTIPLAN
                <ul style={{ paddingLeft: "2rem" }}>
                  <li>MEDICARE ADVANTAGE PLANS</li>
                  <li>PPO</li>
                </ul>
              </li>
              <li>PROVIDER NETWORK OF AMERICA PRIMARY PPO / SUPPLEMENTAL</li>
              <li>PROVIDER SELECT INC</li>
              <li>THREE RIVERS PROVIDER NETWORK PPO</li>
              <li>TRICARE PROGRAM</li>
              <li>USA MANAGED CARE PPO</li>
              <li>UNITED HEALTHCARE (Commercial plans only)</li>
              <li>
                ZELIS HEALTHCARE
                <ul style={{ paddingLeft: "2rem" }}>
                  <li>MEDICAID/AHCCCS</li>
                  <li>MEDICARE</li>
                  <li>PRIMARY PLAN PPO</li>
                  <li>SUPPLEMENTAL</li>
                  <li>TRICARE</li>
                </ul>
              </li>
            </ol>
          </div>
          <p style={{color:"white"}}>
            Our list of accepted health plans continues to go, so please contact
            us if you don’t see your plan or have any questions. We also offer
            affordable cash pricing. Please note, payment for services is the
            responsibility of the patient, not the insurance company. When you
            arrive, you’ll be asked to provide your insurance card for our
            records.
          </p>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Insurance;
