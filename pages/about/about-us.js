import Seo from "../../components/common/Seo";
import Head from "next/head";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";

const Insurance = () => {
  const head = () => {
    const title = "About Us || Little Star Pediatrics";
    const metaDesc =
      "CGet exceptional healthcare for your child at Little Star Pediatrics - serving infants to young adults in Phoenix & nearby areas. Schedule an appointment!";
    const websiteUrl = "https://littlestarpeds.com/";
    const cononicalURL = websiteUrl + "about/about-us";
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
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      <div class="about backgroundGrey" style={{ paddingTop: "20vh" }}>
        <h1 class="text-center" style={{ paddingTop: "2rem" }}>
          ABOUT LITTLE STAR PEDIATRICS, AVONDALE
        </h1>
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-5 litte-star-img"
              style={{ size: "100px", paddingTop: "4rem" }}
            >
              <img
                src="/images/myImages/logo.png"
                alt=""
                style={{ width: "50%", borderRadius: "10px" }}
              />
            </div>
            <div class="col-12 col-sm-7" style={{ paddingTop: "2rem" }}>
              <p class="text-justify" style={{ color: "white" }}>
                Little Star Pediatrics was established in July 2019 to provide
                affordable, effective, age-appropriate, and culturally sensitive
                healthcare for all pediatric patients from infants to young
                adults in Phoenix, Estrella, Litchfield Park, and Avondale. We
                believe we can impact change in the community by providing
                excellent healthcare, educating parents and children on
                preventable diseases, raising awareness on benefits of a healthy
                lifestyle, and the importance of health maintenance for our
                community children’s overall health and psycho-social
                well-being. Little Star Pediatrics provides personalized and
                accessible healthcare to children from birth to age 20. Each
                child’s health and their parent’s peace of mind is our priority
                as we provide services ranging from preventive health care, such
                as well-child checks and immunizations, to diagnosing and
                treating acute and chronic illnesses. We assure you that we
                provide a friendly and comfortable environment that revolves
                around a trusting provider-patient relationship. Childhood
                health is the foundation of a long and healthy life. Children go
                through ongoing growth and development until age 21, which is
                why we believe that a healthy childhood will lead to healthy
                adulthood. Here at Little Star Pediatrics, we take honor in
                providing your child with personalized care focusing on their
                physical growth, emotional well-being, and psycho-social health.
              </p>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-sm-5 litte-star-img"
              style={{ size: "100px", paddingTop: "4rem" }}
            >
              <img
                src="/images/myImages/ameeta.jpg"
                alt=""
                style={{ width: "50%", borderRadius: "10px" }}
              />
            </div>
            <div class="col-12 col-sm-7" style={{ paddingTop: "2rem" }}>
              <p class="text-justify" style={{ color: "white" }}>
                <br />
                Ameeta Chowdhary, MSN, FNP-C, is a highly experienced family
                nurse practitioner providing services to children who live in or
                near Avondale, Arizona. Ameeta’s solo practice, Little Star
                Pediatrics, offers individualized, holistic care, targeting
                problem areas before they lead to more serious issues. Ameeta’s
                biggest strength is her availability, enabling her to provide
                personalized treatment that ensures no child in her care is just
                a number on a schedule. Ameeta attended the University of
                Phoenix. She graduated with a Bachelor of Science in Nursing,
                followed by a Master of Science in Family Nurse Practitioner.
                She began her career as a cardiac care nurse in a critical care
                setting, and she has extensive experience in both inpatient
                nursing and with the role of a family nurse practitioner.Ameeta
                developed a passion for pediatrics and caring for children
                during the pediatric rotation element of her nurse practitioner
                program. She started her nurse practitioner career at a
                pediatric primary care practice in Maryvale, Arizona, gaining
                invaluable knowledge, skills, and experience. Ameeta is an
                active member of the American Association of Nurse
                Practitioners, the American Association of Nurses, and the
                National Association of Pediatric Nurse Practitioners (Arizona
                Chapter).Ameeta loves children and feels honored that parents
                trust their most precious possessions to her. She’s cared for
                numerous children in Avondale and the surrounding area,
                assessing, diagnosing, treating, and managing both acute and
                chronic conditions as well as mental health. Part of her
                commitment to each of her patients is that she never finishes
                any visit without producing a comprehensive care plan. Ameeta
                believes it’s essential to reassure parents as well as their
                children and give them as much peace of mind as possible.When
                she’s not in the office, Ameeta likes spending time with her
                husband and their two children. She loves to bake and decorate
                cakes, is a regular runner, and enjoys playing board games with
                her family.
              </p>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default Insurance;
