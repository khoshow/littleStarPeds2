const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Registration", url: "/forms/new-registration-1" },
      { label: "About", url: "/about/about-us" },
     
      { label: "Telemedicine", url: "/telemedicine" },
      { label: "Testimonials", url: "/testimonials" },
      { label: "Insurance", url: "/insurance" },

    ],
  },

  {
    title: "Treatments",
    links: [
      { label: "Asthma", url: "/services/asthma" },
      { label: "Cold & Flu", url: "/services/cold-and-flu" },
      { label: "Counselling", url: "/services/counselling" },
      { label: "ENT", url: "/services/ent" },
      { label: "Newborn Care", url: "/services/newborn-care" },
      { label: "Physical Examinations", url: "/services/physical-examinations" },
      { label: "Wellness Visits", url: "/services/wellness-visits" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Patient Forms", url: "/patient-info/patient-forms" },
      { label: "Office Info", url: "/patient-info/office-information" },
      { label: "Resources", url: "/patient-info/useful-resources" },
      { label: "Insurance", url: "/insurance" },
      { label: "Financial Policy", url: "/files/Financial%20Policy.pdf" },
      { label: "Patient Privacy", url: "/files/Notice%20of%20Private%20Practices.pdf" },
      { label: "Covid Policy", url: "/files/Covid%2019.pdf" },
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
                <a href={link.url} style={{color:"white"}} target="_blank">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
