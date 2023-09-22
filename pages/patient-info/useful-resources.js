import Seo from "../../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";

const Insurance = () => {
  const head = () => {
    const title = "Useful Resources || Little Star Pediatrics";
    const metaDesc =
      "Useful Resources for Little Star Pediatrics✨";
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
      <div className="backgroundBlue">
        <div class="container" style={{ paddingTop: "20vh" }}>
          <h1 class="text-center">USEFUL RESOURCES</h1>
          <div class="" style={{ paddingTop: "2rem" }}>
            <ul>
              <li>
                <a href="https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/immunization/school-childcare/immunizations-preschool.pdf">
                  Arizona Immunization Requirements (Birth – Age 5)
                </a>
              </li>
              <li>
                <a href="https://www.cdc.gov/ncbddd/actearly/milestones-app.html">
                  CDC Milestone Tracker App
                </a>
              </li>
              <li>
                <a href="https://kidshealth.org/">KidsHealth.org</a>
              </li>
              <li>
                <a href="https://acaai.org/news/new-pediatric-asthma-yardstick-has-treatment-guidance-children-every-age">
                  Pediatric Asthma
                </a>
              </li>
              <li>
                <a href="https://www.nhtsa.gov/equipment/car-seats-and-booster-seats">
                  {" "}
                  Find a Car Seat Inspection Station
                </a>
              </li>
              <li>
                <a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/body-piercings.aspx">
                  Body Piercings, Teens & Potential Health Risks
                </a>
              </li>
              <li>
                <a href="https://www.healthychildren.org/english/tips-tools/symptom-checker/pages/default.aspx">
                  Pediatric Symptom Checker
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <a href="https://www.similacrecall.com/us/en/home.html?utm_campaign=rcl-powder-recall-2022&utm_medium=tag-referral&utm_source=rcl-similac-com&utm_content=rcl-powder-recall-site-banner-click&utm_term=20220217">
                <img
                  class="card-img-top"
                  src="/images/myImages/abbott.jpg"
                  alt="Abbott formula Arizona"
                />{" "}
              </a>
              <a
                href="https://www.similacrecall.com/us/en/home.html?utm_campaign=rcl-powder-recall-2022&utm_medium=tag-referral&utm_source=rcl-similac-com&utm_content=rcl-powder-recall-site-banner-click&utm_term=20220217"
                class="card-link" style={{color:"black"}}
              >
                Link to Similac Formula recall information for parents
              </a>
            </div>
          </div>
          <br />
          <div>
            <h2>Resources on Oral Health</h2>
            <ul>
              <li>
                <a href="https://www.newmouth.com/orthodontics/">
                  {" "}
                  Orthodontic Treatment Options
                </a>
              </li>
              <li>
                <a href="https://www.newmouth.com/oral-health/effects/">
                  How Your General Health & Lifestyle Impacts Your Oral Health
                </a>
              </li>
              <li>
                <a href="https://www.newmouth.com/dentistry/pediatric/">
                  Pediatric Dentistry: Common Oral Conditions & Treatment
                  Options
                </a>
              </li>
              <li>
                <a href="https://www.newmouth.com/oral-health/">
                  What Is Oral Health? Common Oral Conditions & Prevention Tips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Insurance;
