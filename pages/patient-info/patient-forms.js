import Seo from "../../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";

const Insurance = () => {
  const head = () => {
    const title = "patient Forms || Little Star Pediatrics";
    const metaDesc =
      "Contact Page for Little Star Pediatrics✨";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "contact";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/asthma.png";

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
        <div class="container" style={{ paddingTop: "10vh" }}>
          <h1 class="text-center" style={{ padding: "2rem", color: "#f9ba32" }}>
            Patient Forms
          </h1>
          <div class="container">
           
            <div >
              <div>
                <Link href="/forms/New-Registration">
                  <div
                    class="btn btn-primary btn-lg first-button "
                    style={{margin: "3rem 0"}}
                  >
                    Online registration Form
                  </div>
                </Link>
              </div>

              <div >
                <h4>
                  Save time by completing forms before your appointment.
                  <br />
                  Downloadable Forms
                </h4>
                <ul style={{color: "white"}}>
                  <li>
                    <a href="../files/New Patient Welcome Letter.pdf">
                      New Patient Welcome Letter
                    </a>
                  </li>
                  <li>
                    <a href="../files/New Patient Reg Form.pdf">
                      New Patient Registration Form
                    </a>
                  </li>
                  <li>
                    <a href="../files/Financial Policy.pdf">Financial Policy</a>
                  </li>
                  <li>
                    <a href="../files/Fax Cover Sheet.pdf">Fax Cover Sheet</a>
                  </li>
                </ul>
              </div>
              <div style={{margin: "2rem"}}>
                <h4>Patient Privacy</h4>
                <ul>
                  <li>
                    <a href="../files/Notice of Private Practices.pdf" style={{color:"white"}}>
                      Notice of Privacy Practices
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{margin: "2rem"}}>
                <h4>Health Records Release Authorization.</h4>
                <p style={{color:"white"}}>
                  If you wish to transfer any part of your medical records from
                  our office, complete this form and return it to us.
                </p>
                <ul>
                  <li>
                    <a href="../files/Release and Authorization.pdf" style={{color:"white"}}>
                      Release and Authorization of PHI
                    </a>
                  </li>
                </ul>
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
