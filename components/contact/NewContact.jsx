import { useState } from "react";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  const [route, setRoute] = useState();
  const [message, setMessage] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    // console.log("fier: "+e.currentTarget.elements.robot[4])
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    if (formData.robot2 == 4) {
      fetch("/api/contact-form", {
        method: "post",
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.error) {
          console.log(response.error);
          router.push("/new-registration/unsuccessful");
        } else {
          // setMessage(
          //   "Your message has been sent successfully. Will contact you shortly. Thank you."
          // );
          router.push("/new-registration/submit");
          //   showSuccessMessage();
        }
      });
    } else {
      setMessage("You seems to be a robot. Or solve the sum to send.");

      showSuccessMessage();
      // Router.push('/confirmation')
    }
  }

  const showSuccessMessage = () => {
    if (message) {
      return (
        <div
          className="col-md-12 jumbotron"
          style={{
            paddingTop: "2rem",
            textAlign: "center",
            marginLeft: "auto",
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
    <section style={{ backgroundColor: "", padding: "4rem 0" }}>
      <div className="form-style-one" data-aos="fade-up">
        <form onSubmit={handleOnSubmit} method="post">
          <div className="messages" />
          <div className="row controls">
            <div className="col-12">
              <div className="input-group-meta form-group mb-30">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            {/* End .col-12 */}
            <div className="col-12">
              <div className="input-group-meta form-group mb-50">
                <input
                  type="phone"
                  placeholder="Phone Number*"
                  name="phone"
                  required="required"
                  data-error="Valid contact number is required."
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-12">
              <div className="input-group-meta form-group mb-50">
                <input
                  type="email"
                  placeholder="Email Address*"
                  name="email"
                  required="required"
                  data-error="Valid email is required."
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-12">
              <div className="input-group-meta form-group mb-30">
                <textarea
                  placeholder="Your message*"
                  name="message"
                  required="required"
                  data-error="Please,leave us a message."
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group-meta form-group mb-30 mt-30">
                <label htmlFor="robot2" style={{color:"white"}}>Prove you are not a robot!</label>
                <input
                  placeholder="What is 2+2?"
                  id="robot2"
                  type="text"
                  name="robot2"
                  required="required"
                  data-error="Prove you are not a robot."
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-12">
              <button className="btn-twentyOne fw-500 tran3s d-block">
                Send Message
              </button>
              <div> {showSuccessMessage()}</div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
