import { useState } from "react";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const [route, setRoute] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    setLoading(true);
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    if (formData.robot2 == 4) {
      setLoading(true); // Start loading before the fetch request
      fetch("/api/contact-form-zoho", {
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

              setLoading(false); // Stop loading after error handling
            });
          }
          // Parse the JSON response if the response is OK
          return response.json();
        })
        .then((data) => {
          if (data && data.message) {
            setMessage(data.message); // Set the message from the response
          } else {
            setMessage("Unexpected response format. Please try again.");
          }
          setLoading(false); // Stop loading after success
        })
        .catch((error) => {
          console.log("Fetch error:", error);
          setMessage("There was a network error. Please try again later.");

          setLoading(false); // Stop loading after network error
        });
    } else {
      setMessage("You seem to be a robot. Or solve the sum to send.");

      setLoading(false); // Stop loading if the robot check fails
    }
  }
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
          {loading ? (
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )}
          {message ? (
            <div
              className="col-md-6 jumbotron"
              style={{
                padding: "2rem 0",
                textAlign: "center",
                margin: "auto auto",
              }}
            >
              <p
                style={{
                  position: "relative",

                  alignItems: "center",
                  backgroundColor: "red",
                  height: "100px",

                  padding: "1rem",
                  color: "white",
                  float: "left",
                }}
              >
                {message}
              </p>
            </div>
          ) : (
            ""
          )}
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
