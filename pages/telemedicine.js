import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Telemedicine from "../components/home-page/home-1/Telemedicine"
import TelemedicineFancyBlock from "../components/home-page/home-1/TelemedicineFancyBlock"

const PortfolioV1 = () => {
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
        <Telemedicine />
    
        <div className="container">
          <div className="border-top">
            <div className="row gx-xxl-5">
              <TelemedicineFancyBlock />
              
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
