import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "fa fa-baby fa-3x ",
    title: "New Born Care",   
    delayAnim: 0,
  },
  {
    icon: "fa fa-user-nurse fa-3x ",
    title: "Physical Exams",
    delayAnim: 100,
  },
  {
    icon: "fa fa-virus fa-3x ",
    title: "Cold & Flu",
    delayAnim: 200,
  },
  {
    icon: "fa fa-lungs fa-3x ",
    title: "Asthma",
    delayAnim: 300,
  },
  {
    icon: "fa fa-heartbeat fa-3x",
    title: "Wellness Visit",
    delayAnim: 300,
  },
  {
    icon: "fa fa-hand-holding-medical fa-3x",
    title: "Counselling",
    delayAnim: 300,
  },
  {
    icon: "fa fa-clinic-medical fa-3x",
    title: "ENT",
    delayAnim: 300,
  },
  {
    icon: "fa fa-briefcase-medical fa-3x",
    title: "Preventive Screenings",
    delayAnim: 300,
  },
];

const Service = () => {
  return (
    <>
    <div className="row">
 
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6 p-2"
          key={index}
        
        >
          
          <div className="card-style-sixteen tran3s text-center position-relative ">
            <div className="icon services-item">
            <i className={service.icon  +  " services-icon" }></i>
              {/* <Image src={service.icon} alt="" width="50" height="50" style={{color}} className="lazy-img m-auto" /> */}
              <h4 className="tx-white ">{service.title}</h4>
            </div>
           
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"  style={{backgroundColor:"#29AEE1"}}
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
      </div>
    </>
  );
};

export default Service;
