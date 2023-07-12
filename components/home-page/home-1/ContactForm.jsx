import { useState } from "react";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const [route, setRoute] = useState();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};

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
          console.log("Hello wrin");
          console.log(response.error);
          console.log("Hello wrin");
        } else {
          router.push("/new-registration/submit");
        }
      });
    } else {
      setMessage("You seems to be a robot. Please try again");
      showSuccessMessage();
      // router.push('/confirmation')
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
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input type="text" placeholder="Your name*" name="name" required />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input type="text" placeholder="Phone*" name="phone" required />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input type="email" placeholder="Email*" name="email" required />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <textarea placeholder="Your message*" name="message" required />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}
        <div className="form-group col-md">
          <div className="input-group-meta form-group mb-15">
            <label>Prove you are not a robot.</label>
            <input
              type="text"
              className="form-control"
              name="robot2"
              aria-describedby="robotHelp"
              placeholder="Solve: 2+2?"
              style={{ width: "" }}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
          >
            SEND MESSAGE
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      {/* <div className="fs-16 text-center mt-25">
        <span className="opacity-75">Been here before?</span>{" "}
        <a href="#" className="tx-dark fw-500">
          Check your query
        </a>
      </div> */}
    </form>
  );
};

export default ContactForm;
