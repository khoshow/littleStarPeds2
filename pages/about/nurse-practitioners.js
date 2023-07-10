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
