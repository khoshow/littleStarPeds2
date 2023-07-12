import Link from "next/link";

const links = [
  {
    title: "Privacy & Terms.",
    href: "/faq",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
  },
  {
    icon: "fab fa-twitter",
    href: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
            {/* <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
              {links.map((link, index) => (
                <LinkItem key={index} title={link.title} href={link.href} />
              ))}
            </ul> */}
          </div>
          <div className="col-lg-4 order-lg-2 mt-15">
            <a href="https://finerblue.com" style={{color:"white", fontSize:"12px"}}>Web developed by Finer Blue</a>
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0"style={{color:"white", fontSize:"16px"}} >
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit", }}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
               Little Star Pediatrics
              </a>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
