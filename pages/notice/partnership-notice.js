import Head from "next/head";
import DefaultFooter from "../../components/footer/DefaultFooter";
import DefaulHeader from "../../components/header/DefaulHeader";
import styles from "./notice.module.css";

export default function NoticePage() {
  const head = () => {
    const title = "Partnership Notice || Little Star Pediatrics";
    const metaDesc =
      "Little Star Pediatrics will be entering into a partnership with Moon Valley Pediatrics led by Dr. Kamaljeet “Kam” Sachdeva. ";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "notice/partnership-notice";
    const websiteName = "Little Star Pediatrics";
    const imageUrl = websiteUrl + "images/myImages/ameeta.jpg";

    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={cononicalURL} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        {/* {console.log("Url", process.env.DOMAIN_WEBSITE_URL)} */}
        <meta property="og:site_name" content={websiteName} />
        <meta property="og:image" content={imageUrl} />

        <meta property="og:image:type" content="image/png" />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
    );
  };
  return (
    <>
      {head()}

      <DefaulHeader />
      <main className={styles.wrapper}>
        <div className={styles.card}>
          <p className={styles.label}>IMPORTANT NOTICE</p>
          <h2 className={styles.heading}>A message from Ameeta Chowdhary</h2>

          <div className={styles.content}>
            <p>Dear Little Star Pediatrics Families,</p>

            <p>
              I would like to share an important update regarding our practice.
              Effective May 4, 2026, Little Star Pediatrics entered into a
              partnership with Moon Valley Pediatrics.
            </p>

            <p>
              As part of this transition, Dr. Kamaljeet “Kam” Sachdeva, a
              board-certified pediatrician, has joined our practice leadership
              team. Together, we will continue working to support the healthcare
              needs of our patients and families.
            </p>

            <p>
              This decision was made to allow me to focus more on patient care
              and my family while reducing the administrative responsibilities
              associated with operating an independent practice. My priority
              throughout this process has been ensuring continuity of care for
              the families who have trusted Little Star Pediatrics with their
              children’s healthcare.
            </p>

            <p>
              I want to reassure you that I will continue serving as your
              child’s primary care provider and remain committed to providing
              the same personalized, compassionate care that you have come to
              expect. There will be no interruption in patient care or access to
              services as a result of this transition.
            </p>
            <p>
              I am grateful for the trust and support you have shown me over the
              years. Caring for your children continues to be both a privilege
              and a responsibility that I value deeply.
            </p>
            <p>
              If you have any questions, please do not hesitate to contact our
              office.
            </p>

            <p className={styles.signature}>
              With gratitude,
              <br />
              <strong>Ameeta Chowdhary, MSN, APRN, FNP-C</strong>
            </p>
          </div>
        </div>
      </main>
      <DefaultFooter />
    </>
  );
}