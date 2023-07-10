import Image from "next/image";

const FancyBlock = () => {
  const cardsData = [
    {
      iconSrc: "/images/icon/icon_70.svg",
      title: "Schedule",
      description: "Schedule at one of your convenient date and time",
      delay: "100",
    },
    {
      iconSrc: "/images/icon/icon_71.svg",
      title: "Meet",
      description: "Get telehealth at the comfort of your home.",
      delay: "200",
    },
    {
      iconSrc: "/images/icon/icon_72.svg",
      title: "Happy Child",
      description: "Keep your child healthy, safe and happy.",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className={`card-style-eleven d-flex w-100 mt-85 lg-mt-40`}>
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <Image
                width={24}
                height={24}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <div className="text">
              <h4 className="mb-10 tx-dark">{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock;
