import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Telemedicine from "../components/home-page/home-1/Telemedicine";
import TelemedicineFancyBlock from "../components/home-page/home-1/TelemedicineFancyBlock";

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
      <div className="fancy-feature-twentyThree mt-35 backgroundGrey">
        <div class="container" style={{ paddingTop: "10vh" }}>
          <h1 class="text-center" style={{ padding: "2rem", color: "#f9ba32" }}>
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
