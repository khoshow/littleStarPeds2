import Link from "next/link";
// import LoginForm from "../components/common/LoginForm";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";

const Unsuccess = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Seo pageTitle="Login" />
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <DefaulHeader />
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">
              Form couldnt be sent. Please try again.
            </h2>
            <p>If you are not able to send, please report it to us.</p>
          
            <Link
              href="/forms/New-Registration"
              className="btn-red fw-500 tran3s m-2"
            >
              Registration
            </Link>
            <Link href="/" className="btn-red fw-500 tran3s m-2">
              Home
            </Link>
          </div>
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">
          Copyright @{currentYear} Little Star Pediatrics
        </p>
        <img
          src="/images/myImages/logo.png"
          alt="illustration"
          className="lazy-img illustration-one wow fadeInRight"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two wow fadeInLeft"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default Unsuccess;
