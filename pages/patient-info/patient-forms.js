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
