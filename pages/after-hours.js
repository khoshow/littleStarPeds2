import Head from "next/head";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Telemedicine from "../components/home-page/home-1/Telemedicine";
import TelemedicineFancyBlock from "../components/home-page/home-1/TelemedicineFancyBlock";

const Insurance = () => {
  const head = () => {
    const title = "After Hours || Little Star Pediatrics";
    const metaDesc =
      "If you are trying to reach the provider after hours, please leave a detailed message starting with your name, relationship to the patient, patient name and date of birth.";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "after-hours";
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

      <DefaulHeader />
      <div className="fancy-feature-twentyThree mt-35 backgroundGrey">
        <div className="container" style={{ paddingTop: "10vh" }}>
          <h1
            className="text-center"
            style={{ padding: "2rem", color: "#f9ba32" }}
          >
            AFTER HOURS CONTACT
          </h1>

          <div style={{ padding: "2rem", color: "white" }}></div>
          <p style={{ color: "white" }}>
            Hello, You have reached Little Star Pediatrics after-hours phone
            line. If this is a life threatening emergency and needs immediate
            attention, please call 911 or go to your closest emergency room. If
            you are trying to reach the provider after hours, please leave a
            detailed message starting with your name, relationship to the
            patient, patient name and date of birth. Please spell out patient
            first and last name. We will call you back within 1 hour. Thank you.
          </p>
          <div style={{ padding: "20px 0 100px 0", textAlign: "center" }}>
            <a href="tel:480-280-2219" className="btn btn-primary btn-lg m-2">
              (480)280-2219
            </a>
            <a
              href="https://doxy.me/littlestar"
              className="btn btn-primary btn-lg m-2"
            >
              Telemedicine
            </a>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Insurance;
