import Seo from "../../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";

const Insurance = () => {
  const head = () => {
    const title = "Contact || Little Star Pediatrics";
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
