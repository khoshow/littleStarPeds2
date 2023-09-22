import Seo from "../../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";

const Insurance = () => {
  const head = () => {
    const title = "About Nurse Practitioners || Little Star Pediatrice";
    const metaDesc =
      "Need a trusted pediatrician or nurse practitioner in Avondale AZ? We serve infants to young adults in Phoenix & surrounding areas. Book your appointment today!!";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "about/nurse-practitioners";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/Nurse-practitioner-logo.png";

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
      <div className="nurse-practitioners backgroundGrey">
        <div style={{ paddingTop: "20vh" }}>
          <h1
            className="text-center"
            style={{ paddingTop: "2rem", color: "#F9BA32" }}
          >
            ABOUT NURSE PRACTITIONERS
          </h1>
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-sm-5 litte-star-img"
                style={{ paddingTop: "4rem", textAlign: "center" }}
              >
                <img
                  src="/images/myImages/Nurse-Practitioner-logo.png"
                  alt="Nurse Practitioner logo"
                  style={{ width: "50%", borderRadius: "10px" }}
                />
              </div>
              <div className="col-12 col-sm-7" style={{ paddingTop: "2rem" }}>
                <h2>History of Nurse Practitioners</h2>
                <p style={{ color: "white" }}>
                  The role of Nurse Practitioners began in response to the
                  shortage of primary care providers when Medicare and Medicaid
                  in 1965 expanded their coverage to low-income families and
                  patients with disabilities. The first nurse practitioner
                  program was developed that year by Dr. Loretta Ford and Dr.
                  Henry Silver in the University of Colorado. Initially, Nurse
                  Practitioners worked primarily in pediatrics, but in 1970s
                  many new Nurse Practitioner programs emerged with adult health
                  focus and certification. A Nurse Practitioner (NP) is an
                  Advanced Practice Registered Nurse. After earning a Master’s
                  in Nursing Degree and becoming board certified in a nurse
                  practitioner specialty, Nurse Practitioners follow rules and
                  regulations set by the Nurse Practice Act of their practicing
                  state.
                </p>
                <h2>The Role of Nurse Practitioners</h2>
                <p style={{ color: "white" }}>
                  The role of NP’s includes, but is not limited to, the
                  following: Conduct examinations Prescribe medication Conduct
                  and order diagnostic tests Diagnose and treat acute and
                  chronic illnesses Nurse Practitioners use a holistic and
                  preventive care approach with personalized treatment based on
                  evidence-based research and the latest health guidelines to
                  promote optimal patient health and healing. These advanced
                  care practitioners are quickly becoming the health partner of
                  choice for millions of Americans. By blending their clinical
                  expertise in diagnosing and treating health conditions with an
                  added emphasis on disease prevention and health management,
                  they bring a comprehensive perspective and personal touch to
                  health care.
                </p>
                <br />
                <p style={{color:"white"}}>
                  Looking for a nurse practitioner or pediatrician avondale AZ,
                  call us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Insurance;
