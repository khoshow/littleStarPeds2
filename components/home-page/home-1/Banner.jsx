const Banner = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star" />
      </li>
    );
  }

  return (
    <div className="top-banner text-center">
      <h2 className="tx-dark mb-20 tx-blue">Top Rated Pediatric Care</h2>
      <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20">
        “The best pediatric office! Staff here is so nice and helpful whenever needed.”
      </p>
      <div className="d-inline-flex align-items-center">
        <ul className="d-flex style-none rating">{stars}</ul>
        <div className="fs-20 ms-4">
          {/* <strong className="fw-500 tx-dark">More than Google 5 FUll Star Reviews</strong>{" "} */}
          <span className="tx-dark opacity-25">More than 90 Google full 5 star reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
