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
      <div className="fancy-feature-twentyThree mt-35 backgroundBlue">
        <div
          className="container style-title-eight"
          style={{ paddingTop: "10vh", color: "white" }}
        >
          <h1
            className="main-title"
            style={{ paddingTop: "10vh", color: "white" }}
          >
            Little Star Pediatrics is located at 10575 W. Indian School Road
            #E-103 Avondale.
          </h1>
          <p>We are located in the retail center south of the Chase Bank.</p>

          <div className="map-area-one mt-40 lg-mt-80 fadeInUp">
            <div className="box-layout">
              <div className="mapouter">
                <div className="gmapCanvas">
                  <iframe
                    className="gmap_iframe"
                    src="https://www.google.com/maps/place/Little+Star+Pediatrics,+10575+W.+Indian+School+Road+%23E-103,+Avondale,+AZ+85392,+United+States/@33.492856,-112.286149,13z/data=!4m6!3m5!1s0x872b41409dff6e87:0x4f42e9113bd9b5f!8m2!3d33.4928558!4d-112.2861491!16s%2Fg%2F11fmvkj8_p?hl=en&gl=IN"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="officeHours" style={{ color: "white" }}>
            <div>
              <h2 className="main-title" style={{ color: "white" }}>
                Office Hours Designed to Fit Your Schedule
              </h2>
              <p>
                Our flexible hours are designed to work within your schedule as
                our doors are open after hours and on weekends to accommodate
                working parents.
              </p>
            </div>
            <div className="tableStructure">
              <table className="center" style={{ textAlign: "center" }}>
                <tbody>
                  <tr>
                    <td>Monday &nbsp; &nbsp;</td>
                    <td>9:00 am - 5:00 pm</td>
                  </tr>
                  <tr>
                    <td>Tuesday &nbsp; &nbsp;</td>
                    <td>9:00 am - 5:00 pm</td>
                  </tr>
                  <tr>
                    <td>Wednesday &nbsp; &nbsp;</td>
                    <td>9:00 am - 5:00 pm</td>
                  </tr>
                  <tr>
                    <td>Thursday &nbsp; &nbsp;</td>
                    <td>9:00 am - 3:00 pm</td>
                  </tr>
                  <tr>
                    <td>Friday &nbsp; &nbsp;</td>
                    <td>9:00 am - 5:00 pm</td>
                  </tr>
                  <tr>
                    <td>Saturday &nbsp; &nbsp;</td>
                    <td>
                      8:30 am - 12:00 pm <br />
                      <span style={{ fontSize: "0.8rem" }}>
                        (One Saturday per month. Please call for availability)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Sunday &nbsp; &nbsp;</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Insurance;
