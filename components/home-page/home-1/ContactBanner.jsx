import Link from "next/link"

const contactBanner =()=>{
    return (
        
      <div className="fancy-short-banner-sixteen mt-130 pb-60 lg-mt-80 wow fadeInUp">
      <div className="container">
        <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
          <div className="row">
            <div className="col-xl-10 col-md-11 m-auto">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-wrapper text-center text-lg-start md-pb-30">
                    <div className="fs-12 pb-10">
                      Looking for a pediatric care for your child?
                    </div>
                    <h2 className="main-title fw-500 text-white m0">
                      Don’t hesitate to contact us.
                    </h2>
                  </div>
                </div>
                {/* End .col-6 */}

                <div className="col-lg-5 ms-auto text-center text-lg-end">
                  <Link
                    href="/contact"
                    className="btn-twentyOne fw-500 tran3s"
                  >
                    Contact us Today!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </div>
    )
}

export default contactBanner