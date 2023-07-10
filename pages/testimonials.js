import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Link from "next/link";
import Testimonials from "../components/home-page/home-1/TestimonialsPage"


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
        <Testimonials />
    
        
      </div>

      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
