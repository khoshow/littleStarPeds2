import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";

const Insurance = () => {
  return (
    <>
      <Seo pageTitle="Service Details" />
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
