const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about/about-us" },
      { label: "Little Star Peds, Glendale", url: "/" },
      { label: "Telemedicine", url: "/telemedicine" },
      { label: "Testimonials", url: "/testimonials" },
      { label: "Insurance", url: "/insurance" },

    ],
  },
  {
    title: "Info",
    links: [
      { label: "Patient Forms", url: "/patient-info/patient-forms" },
      { label: "Office Info", url: "/patient-info/office-information" },
      { label: "Resources", url: "/patient-info/useful-resources" },
      { label: "Insurance", url: "/insurance" },
    ],
  },
  {
    title: "Treatments",
    links: [
      { label: "Asthma", url: "/services/asthma" },
      { label: "Cold & Flu", url: "/services/cold-and-flu" },
      { label: "Counseling", url: "/services/counseling" },
      { label: "ENT", url: "/services/ent" },
      { label: "Newborn Care", url: "/services/newborn-care" },
      { label: "Physical Examinations", url: "/services/physical-examinations" },
      { label: "Wellness Visits", url: "/services/wellness-visits" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal" style={{color:"white"}}> {column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} style={{color:"white"}}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
