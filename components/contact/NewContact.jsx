import { useState } from "react";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  const [route, setRoute] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    gtag_report_conversion(); // Call the conversion function
    const formData = {};
    setLoading(true);
    // console.log("fier: "+e.currentTarget.elements.robot[4])
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    if (formData.robot2 == 4) {
      setLoading(true); // Start loading before the fetch request
      fetch("/api/contact-form-nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          // Check if the response is okay (status 200-299)
          if (!response.ok) {
            console.log("Error with response:", response);
            return response.json().then((errorData) => {
              console.log("Error:", errorData);
              setMessage(
                "There was an error sending your message. Please try again."
              );
              showSuccessMessage();
              setLoading(false); // Stop loading after error handling
            });
          }
          // Parse the JSON response if the response is OK
          return response.json();
        })
        .then((data) => {
          if (data && data.message) {
            setMessage(data.message); // Set the message from the response
            showSuccessMessage(); // Call function to show success message
          } else {
            setMessage("Unexpected response format. Please try again.");
          }
          setLoading(false); // Stop loading after success
        })
        .catch((error) => {
          console.log("Fetch error:", error);
          setMessage("There was a network error. Please try again later.");
          showSuccessMessage();
          setLoading(false); // Stop loading after network error
        });
    } else {
      setMessage("You seem to be a robot. Or solve the sum to send.");
      showSuccessMessage();
      setLoading(false); // Stop loading if the robot check fails
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
                <label htmlFor="robot2" style={{ color: "white" }}>
                  Prove you are not a robot!
                </label>
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
              {loading ? (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                ""
              )}
              <div> {showSuccessMessage()}</div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
