const Banner = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star m-2" style={{color:"yellow"}} />
      </li>
    );
  }

  return (
    <div className="top-banner text-center">
      <h2 className="tx-dark main-title mb-20 tx-blue">Top Rated Pediatric Care</h2>
      <p className="text-lg tx-dark opacity-75">
        Trusted by Parents. A happy clinic for the children.
      </p>
      <div className="d-inline-flex align-items-center">
        <ul className="d-flex style-none rating">{stars}</ul>
        <div className="fs-16">
          <span className="">More than 90 Google full 5 star reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
