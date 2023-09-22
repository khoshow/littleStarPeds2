import { useState } from "react";
import { useRouter } from "next/router";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";

const RegistrationForm = () => {
  const [display, setDisplay] = useState("none");
  const toggleDisplay = (x) => {
    if (x == 0) {
      setDisplay("none");
    } else if (x == 1) {
      setDisplay("block");
    }
  };
  const router = useRouter();
  const [route, setRoute] = useState();
  const [message, setMessage] = useState("");

  async function handleOnSubmitQuery(e) {
    e.preventDefault();
    const formData = {};
    // console.log("fier: "+e.currentTarget.elements.robot[4])
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    if (formData.robot == 3) {
      fetch("/api/registration-form", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.error) {
          // console.log("Hello wrin");
          console.log(response.error);
          // console.log("Hello wrin");
        } else {
          // console.log("Success");

          router.push("/new-registration/submit");
        }
      });
    } else {
      setMessage("You seems to be a robot. Please try again");
      showSuccessMessage();
      // router.push('/confirmation')
    }
    if (formData.firstName.length > 20) {
      router.push("/new-registration/unsuccessful");
      return;
    }

    if (formData.lastName.length > 20) {
      router.push("/new-registration/unsuccessful");
      return;
    }
  }

  const showSuccessMessage = () => {
    if (message) {
      return (
        <div
          className="col-md-6 jumbotron"
          style={{
            padding: "2rem 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              position: "relative",
              display: "block",
              alignItems: "center",
              backgroundColor: "red",
              height: "100px",
              width: "100%",
              padding: "1rem",
              color: "white",
              float: "left",
            }}
          >
            {message}
          </p>
        </div>

        // alert("Hello! I am an alert box!!");
      );
    } else return "";
  };

  return (
    <>
      <Seo pageTitle="Service Details" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      <div className="myRegistration" style={{ backgroundColor: "#FFFAFA" }}>
        <div style={{ height: "fitContent" }}>
          {/* <div className="container" >
        <div style="height:100vh">
          <div style="padding-top: 20vh">  <h2>Registration form is disabled temporarily.</h2>
            <p>For query and appointment, please call us at <a href="tel:480-747-0045"><i className="fa fa-phone"></i>480-747-0045</a> or email us at <a href="mailto:info@littlestarpeds.com"><i className="fa fa-envelope"></i> info@littlestarpeds.com</a> </p></div>
        
        </div>
      </div>  */}
          <div>
            <div className="container">
              <div className="">
                <div className="">
                  <div
                    className="registration"
                    style={{
                      height: "fitContent",

                      textAlign: "center",
                      marginTop: "20vh",
                    }}
                  >
                    <h1 style={{ color: "blue" }}>NEW REGISTRATION</h1>
                  </div>
                  <div className="col-md-8" style={{ margin: "0 auto " }}>
                    <form
                      onSubmit={handleOnSubmitQuery}
                      method="post"
                      style={{ padding: "2rem" }}
                      className="myForm "
                    >
                      <h3>Patient Information</h3>
                      {/* <div className="form-row d-flex">
                        <div className=" col-auto">
                          <label for="firstName">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            required
                          />
                        </div>

                        <div className="col-auto">
                          <label for="lastname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastName"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div> */}
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="lastname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastName"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="patientDOB">Birth Date</label>
                          <input
                            className="form-control"
                            type="date"
                            id="patientDOB"
                            name="patientDOB"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="patientAge">Age</label>
                          <input
                            className="form-control"
                            type="number"
                            id="patientAge"
                            name="patientAge"
                            required
                          />
                        </div>
                        <fieldset className="form-group ">
                          <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">
                              Sex
                            </legend>
                            <div className="col-sm-10 d-flex">
                              <div className="form-check ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="patientSex"
                                  id="patientSex1"
                                  value="Female"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="patientSex1"
                                >
                                  Female
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="patientSex"
                                  id="patientSex2"
                                  value="Male"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="patientSex2"
                                >
                                  {" "}
                                  Male{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="form-group col-sm-6">
                          <label htmlFor="inputAddress">Address Line 1</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            name="inputAddress"
                            placeholder="Apartment, studio, or floor"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label htmlFor="inputAddress2">Address Line 2</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            name="inputAddress2"
                            placeholder="1234 Main St"
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label htmlFor="inputCity">City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            name="inputCity"
                            required
                          />
                        </div>
                        <div className="col-sm-6 ">
                          <label htmlFor="validationDefault04">State</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationDefault04"
                            name="inputState"
                            placeholder="State"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label htmlFor="inputZip">Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                            name="inputZip"
                            required
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label htmlFor="exampleFormControlInput1">
                            Primary Phone No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone1"
                            name="phone1"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label htmlFor="exampleFormControlInput1">
                            Emergency Contact No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone2"
                            name="phone2"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label htmlFor="exampleFormControlInput1">
                            Parent/Guardian Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            required
                          />
                        </div>

                        <div>
                          <br />
                          <br />
                          <h3>Reason for the Visit</h3>
                          <fieldset className="form-group">
                            <div className="row">
                              <legend className="col-form-label ">
                                Click one of the options
                              </legend>
                              <div className="col-sm-10">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visitPurpose"
                                    id="visitPurpose1"
                                    value="Child Wellness Check"
                                    required
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="visitPurpose1"
                                  >
                                    Child Wellness Check
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visitPurpose"
                                    id="visitPurpose2"
                                    value="Sports/Physical Injury"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="visitPurpose2"
                                  >
                                    Sports/Physical Injury
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visitPurpose"
                                    id="visitPurpose3"
                                    value="Sickness Visit"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="visitPurpose3"
                                  >
                                    Sickness Visit
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="visitPurpose"
                                    id="visitPurpose4"
                                    value="Newborn Visit"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="visitPurpose4"
                                  >
                                    Newborn Visit
                                  </label>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <br />
                        <br />
                        <h3>Insurance Section</h3>

                        <fieldset className="form-group col-sm-6">
                          <div className="row">
                            <legend className="col-form-label ">
                              Do you have Insurance?
                            </legend>
                            <div className="col-sm-10 d-flex">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="primaryInsurance"
                                  onClick={() => toggleDisplay(1)}
                                  id="primaryInsurance1"
                                  value="Yes"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="primaryInsurance1"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="primaryInsurance"
                                  onClick={() => toggleDisplay(0)}
                                  id="primaryInsurance2"
                                  value="No"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="primaryInsurance2"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div id="insuranceYes" style={{ display: display }}>
                          <div className="form-group">
                            <label htmlFor="insuranceName">
                              Insurance Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="insuranceName"
                              id="insuranceName"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="insuranceID">
                              Insurance ID No.
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="insuranceID"
                              id="insuranceID"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="groupNo">Group No.</label>
                            <input
                              type="text"
                              className="form-control"
                              name="groupNo"
                              id="groupNo"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="subscriberName">
                              Subscriber&apos;s Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="subscriberName"
                              id="subscriberName"
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="subscriberDob">
                              Subscriber&apos;s DOB
                            </label>
                            <input
                              className="form-control"
                              type="date"
                              id="subscriberDob"
                              name="subscriberDob"
                            />
                          </div>

                          <fieldset className="form-group">
                            <div className="row">
                              <legend className="col-form-label col-sm-2 pt-0">
                                Patient Relationship to Subscriber
                              </legend>
                              <div className="col-sm-10">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="subscriberRelation"
                                    id="subscriberRelation1"
                                    value="Self"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="subscriberRelation1"
                                  >
                                    Self
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="subscriberRelation"
                                    id="subscriberRelation2"
                                    value="Parent"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="subscriberRelation2"
                                  >
                                    Parent
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="subscriberRelation"
                                    id="subscriberRelation3"
                                    value="Spouse"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="subscriberRelation3"
                                  >
                                    Spouse
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="subscriberRelation"
                                    id="subscriberRelation4"
                                    value="Local Guardian"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="subscriberRelation4"
                                  >
                                    Legal Guardian
                                  </label>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div>
                          <div style={{ marginTop: "3rem" }}>
                            <h3>Pharmacy Information</h3>
                          </div>
                          <div className="form-group">
                            <label htmlFor="pharmacyName">Pharmacy Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="pharmacyName"
                              id="pharmacyName"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="pharmacyAddress">
                              Pharmacy Address
                            </label>
                            <textarea
                              className="form-control"
                              name="pharmacyAddress"
                              id="pharmacyAddress"
                              cols="10"
                              rows="10"
                              maxLength="40"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                        <br />

                        <h3>Your preferred clinic location?</h3>
                        <fieldset className="form-group">
                          <div className="row">
                            <legend className="col-form-label ">
                              Click one of the options
                            </legend>
                            <div className="col-sm-10 ">
                              <div className="form-check ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="preferredLocation"
                                  id="preferredLocation1"
                                  value="Avondale"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation1"
                                >
                                  Little Star pediatrics, Avondale
                                </label>
                              </div>
                              <div className="form-check ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="preferredLocation"
                                  id="preferredLocation2"
                                  value="Glendale"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation1"
                                >
                                  Little Star pediatrics, Glendale
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <h3>How did you hear about us?</h3>
                        <fieldset className="form-group">
                          <div className="row">
                            <legend className="col-form-label ">
                              Click one of the options
                            </legend>
                            <div className="">
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow1"
                                  value="Google"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation1"
                                >
                                  Google
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow2"
                                  value="Yelp"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation2"
                                >
                                  Yelp
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow3"
                                  value="NextDoor"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Next Door
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow4"
                                  value="Relative"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Relative
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow5"
                                  value="Friend"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Friend
                                </label>
                              </div>

                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow6"
                                  value="Flyer"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Flyer
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow7"
                                  value="Another Medical Office"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Another Medical Office
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow8"
                                  value="Facebook"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Facebook
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow9"
                                  value="Instagram"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Instagram
                                </label>
                              </div>
                              <div className="form-check m-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="comeToKnow"
                                  id="comeToKnow10"
                                  value="Parent Support Group"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="subscriberRelation3"
                                >
                                  Parent Support Group
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="form-group">
                          <label htmlFor="referredBy">Or Referred By</label>
                          <input
                            type="text"
                            className="form-control"
                            id="referredBy"
                            name="referredBy"
                          />
                        </div>
                        <br />
                        <br />
                        <div>
                          <div>
                            <h3>Emergency Contact</h3>
                            <p>
                              (Medical Information may be released to this
                              contact)
                            </p>
                          </div>
                          <div>
                            <div className="form-group">
                              <label htmlFor="authorizedPerson1">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="authorizedPerson1"
                                id="authorizedPerson1"
                                maxLength="20"
                                required
                              />
                            </div>
                            <fieldset className="form-group">
                              <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">
                                  Relationship to Patient
                                </legend>
                                <div className="col-sm-10">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="authorizedRelationship"
                                      id="authorizedRelationship1"
                                      value="Parent"
                                      required
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="subscriberRelation1"
                                    >
                                      Parent
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="authorizedRelationship"
                                      id="authorizedRelationship2"
                                      value="Spouse"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="subscriberRelation2"
                                    >
                                      Spouse
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="authorizedRelationship"
                                      id="authorizedRelationship3"
                                      value="Sibling"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="subscriberRelation3"
                                    >
                                      Sibling
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="authorizedRelationship"
                                      id="authorizedRelationship4"
                                      value="Legal Guardian"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="subscriberRelation4"
                                    >
                                      Legal Guardian
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>

                            <div className="form-group">
                              <label htmlFor="authorizedPhone1">
                                Phone No.
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                name="authorizedPhone1"
                                id="authorizedPhone1"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3>Declaration/Terms and Conditions</h3>
                          <p>
                            (Kindly accept the following terms and conditions
                            before submission of forms)
                          </p>
                          <div>
                            <h3>Financial Policy</h3>
                          </div>
                          <div>
                            <p style={{ textAlign: "justify" }}>
                              The above information is true to the best of my
                              knowledge. I authorize my insurance benefits be
                              paid directly to JB Healthcare LLC d/b/a Little
                              Star Pediatrics. I understand that I am
                              financially responsible for any balance. I also
                              authorize JB Healthcare LLC d/b/a Little Star
                              Pediatrics or my insurance company to release any
                              information required to process my claims.
                              <button>
                                <a href="../files/financialPolicy1.pdf">
                                  Read More
                                </a>
                              </button>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h3>
                              Authorization to view and obtain external
                              prescription history
                            </h3>
                          </div>
                          <div>
                            <p style={{ textAlign: "justify" }}>
                              I authorize the medical providers of JB Healthcare
                              LLC d/b/a Little Star Pediatrics to view and
                              obtain my child’s external prescription history
                              via electronic prescription services. I understand
                              that prescription history from multiple other
                              unaffiliated medical providers, insurance
                              companies, and pharmacy benefit managers may be
                              viewable by my providers and staff through these
                              services, and may include prescriptions back in
                              time for several years.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h3>Notice of privacy practices</h3>
                          </div>
                          <div>
                            <p style={{ textAlign: "justify" }}>
                              I certify that I have received a copy of Notice of
                              Privacy Practices. The Notice of Privacy Practices
                              describes the types of uses and disclosures of my
                              child’s protected health information that might
                              occur in my treatment, payment of my bills or in
                              the performance of JB Healthcare LLC d/b/a Little
                              Star Pediatrics . The Notice of Privacy Practices
                              also describes my child’s rights and JB Healthcare
                              LLC d/b/a Little Star Pediatrics’ duties with
                              respect to my child’s protected health
                              information. The Notice of Privacy Practices can
                              also be found on theJB Healthcare LLC d/b/a Little
                              Star Pediatricswebsiteat littlestarpeds.com. JB
                              Healthcare LLC d/b/a Little Star Pediatrics
                              reserves the right to change the privacy practices
                              that are described in the Notice of Privacy
                              Practices. I may obtain a revised Notice of
                              Privacy Practices by calling the office and
                              requesting a revised copy be sent in the mail,
                              asking for one at the time of my next appointment,
                              or accessing the practice website
                              <button>
                                <a href="../files/JBHPrivacyPractices.pdf">
                                  Read More
                                </a>
                              </button>
                            </p>

                            <br />
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="privacyPracticesAgree"
                                value="Agreed"
                                id="privacyPracticesAgree1"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="privacyPracticesAgree1"
                              >
                                I accept the above terms and conditions.
                              </label>
                              <div className="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="iSign">
                            Declaration and Agreement by
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="iSign"
                            id="iSign"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="signedDate">Date</label>
                          <input
                            type="date"
                            name="signedDate"
                            id="signedDate"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">
                            Email address where the generated form should be
                            sent to
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email2"
                            name="email2"
                            placeholder="name@example.com"
                            required
                          />
                        </div>
                        <p>
                          <i>
                            Kindly check again if you have entered the correct
                            details before submission. No correction from this
                            point forward.
                          </i>{" "}
                        </p>
                        <p>
                          <i>
                            At the submission of this form, we will contact you
                            shortly, or you could check-in at our clinic. The
                            generated form would be sent to your given email
                            address.{" "}
                          </i>{" "}
                        </p>
                        <br />
                        <div className="form-group">
                          <label>Prove you are not a robot. What is 2+1?</label>
                          <input
                            type="number"
                            name="robot"
                            placeholder="Write the number."
                            className="form-control"
                          />
                        </div>
                        <p className="full">
                          <button
                            className="g-recaptcha btn btn-primary"
                            data-sitekey="6LfObeMZAAAAACpQdRJCBFUMiL1zkSQ5Y9AUBukJ"
                            data-callback="onSubmit"
                            data-action="submit"
                            style={{ marginTop: "2rem", marginBottom: "2rem" }}
                            type="submit"
                          >
                            Submit
                          </button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Script>
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function () {
        "use strict"
        window.addEventListener(
          "load",
          function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
              form.addEventListener(
                "submit",
                function (event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add("was-validated");
                },
                false
              );
            });
          },
          false
        );
      })();
    </Script> */}

      <DefaultFooter />
    </>
  );
};

export default RegistrationForm;
