import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Committed",
      subtitle: "",
    },
    {
      id: 2,
      title: "Caring",
      cardNo: "card-two",
      subtitle: "",
    },
    {
      id: 3,
      title: "Trusworthy",
      cardNo: "card-three",
      subtitle: "",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="T-_dFkNfvO4"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className=" md-pb-70">
            {/* <Image
              width={66}
              height={66}
              src="/images/icon/icon_103.svg"
              alt="icon"
              className="lazy-img cursor-pointer"
              onClick={() => setOpen(true)}
            /> */}
            <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
             Little Star Pediatrics is here to provide<span className="fw-500"> affordable, effective, age-appropriate, and culturally sensitive
              healthcare</span> for all pediatric patients from infants to young adults
              in Phoenix, Estrella, Litchfield Park, and Avondale.
            </p>
           
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <Image
              width={372}
              height={485}
              layout="intrinsic"
              src="/images/myImages/baby.png"
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center backgroundDarkRed`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg tx-light" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3 className="tx-light">{item.title}</h3>
                  <p className="fs-20 m0 tx-light">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
