import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/myImages/logo.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Telemedicine
            </Link>
          </li>


          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              About
            </a>
            <ul className="dropdown-menu">

              <li >
                <Link href="/about/about-us" className="dropdown-item">
                  <span>Little Star Pediatrics, Avondale</span>
                </Link>
              </li>
              <li >
                <Link href="" className="dropdown-item">
                  <span>Little Star Pediatrics, Glendale</span>
                </Link>
              </li>
              <li >
                <Link href="/about/nurse-practitioners" className="dropdown-item">
                  <span>What are nurse practitioners?</span>
                </Link>
              </li>

            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Patient Info
            </a>
            <ul className="dropdown-menu">

              <li >
                <Link href="/patient-info/patient-forms" className="dropdown-item">
                  <span>Patient Forms</span>
                </Link>
              </li>
              <li >
                <Link href="/patient-info/office-information" className="dropdown-item">
                  <span>Useful Information</span>
                </Link>
              </li>
              <li >
                <Link href="/patient-info/useful-resources" className="dropdown-item">
                  <span>Useful Resources</span>
                </Link>
              </li>

            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/insurance" role="button">
              Insurance
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Treatments
            </a>
            <ul className="dropdown-menu">

              <li >
                <Link href="/services/asthma" className="dropdown-item">
                  <span>Asthma</span>
                </Link>
              </li>
              <li >
                <Link href="/services/cold-and-flu" className="dropdown-item">
                  <span>Cold & Flu</span>
                </Link>
              </li>

              <li >
                <Link href="/services/counseling" className="dropdown-item">
                  <span>Counseling</span>
                </Link>
              </li>
              <li >
                <Link href="/services/ent" className="dropdown-item">
                  <span>ENT</span>
                </Link>
              </li>
              <li >
                <Link href="/services/newborn-care" className="dropdown-item">
                  <span>Newborn Care</span>
                </Link>
              </li>
              <li >
                <Link href="/services/physical-examinations" className="dropdown-item">
                  <span>Physical Examinations</span>
                </Link>
              </li>
              <li >
                <Link href="/services/preventive-screenings" className="dropdown-item">
                  <span>Preventive Screenings</span>
                </Link>
              </li>
              <li >
                <Link href="/services/wellness-visits" className="dropdown-item">
                  <span>Wellness Visit</span>
                </Link>
              </li>


            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Testimonials
            </Link>
          </li>

          {/* End li (home mega menu) */}

          <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link href={subMenu.link} className="dropdown-item">
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <Link href="/pages-menu/pricing" className="dropdown-item">
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link href="/pages-menu/testimonials" className="dropdown-item">
                  <span>Testimonials</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="dropdown-item">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link href={blog.link} className="dropdown-item">
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
