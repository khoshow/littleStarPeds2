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
          <h2 className={styles.heading}>
            A message from Ameeta Chowdhary, MSN, APRN, FNP-C
          </h2>

          <div className={styles.content}>
            <p>Dear Little Star Pediatrics Families,</p>

            <p>
              I want to personally share an important update regarding our
              practice effective date May 4th, 2026. Little Star Pediatrics will
              be entering into a partnership with Moon Valley Pediatrics led by
              Dr. Kamaljeet &ldquo;Kam&rdquo; Sachdeva. This decision comes from
              my desire to spend more time focusing on my family and continue to
              be your child&apos;s primary care provider without
              business/administrative responsibilities. This transition has been
              made very thoughtfully keeping your families and continuity of
              care at the center of every decision.
            </p>

            <p>
              Dr. Sachdeva is a board-certified pediatrician with over 30 years
              of experience caring for children both internationally and here in
              the United States. He completed his pediatric residency at Texas
              Tech University and has been serving families in the Phoenix
              community for many years. He is widely known for being
              approachable, compassionate, and highly experienced, with a strong
              ability to connect with both children and parents. Families often
              appreciate his thoughtful approach, clear communication, and
              dedication to patient-centered care.
            </p>

            <p>
              As I looked for the right partner for Little Star Pediatrics, it
              was very important to me to find someone who shares the same
              philosophy of care that I have always prioritized here at Little
              Star Pediatrics. I carefully chose Moon Valley Pediatrics because
              I truly believe they share the same values &mdash; compassionate,
              personalized, and high-quality care for every child. Dr. Sachdeva
              and I share a commitment to building long-term relationships with
              families, providing personalized and compassionate pediatric care,
              and partnering closely with parents at every stage of a
              child&apos;s growth. You will continue seeing me as your
              child&apos;s primary care provider, and you will now also have
              access to Dr. Sachdeva and his team as an extended support system.
              Together, we will ensure continuity, accessibility, and excellent
              care for your children.
            </p>

            <p>
              We will be working closely together as I am confident that this
              partnership will allow us to continue providing the same
              high-quality care you have come to expect while also strengthening
              our ability to serve you even better. I also assure you there will
              be no interruption in patient care and making appointments for
              your child during this transition. My commitment to you and your
              children remains exactly the same. I am grateful for the trust you
              place in me, and I will keep providing care to your families. If
              you have any questions, please do not hesitate to reach out.
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
