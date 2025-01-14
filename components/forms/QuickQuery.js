import React, { useState, useEffect } from "react";

const QuickQuery = () => {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modal, setModal] = useState(true);
  const [loading, setLoading] = useState(false);

  async function handleOnSubmitQuery(e) {
    e.preventDefault();
    const formData = {};
    // console.log("fier: "+e.currentTarget.elements.robot[4])
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    // console.log("hellpo : "+formData.robot);
    if (formData.robot2 == 4) {
      fetch("/api/quick-query-zoho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            // Handle HTTP errors (non-200 responses)
            console.error("Error with response:", response);
            return response.json().then((errorData) => {
              setMessage(
                errorData.message ||
                  "There was an error sending your message. Please try again."
              );
              showSuccessMessage(); // Show error message
              setLoading(false); // Stop loading animation
              throw new Error(errorData.error || "Unknown error occurred"); // Throw error to exit further processing
            });
          }
          return response.json(); // Parse JSON response for successful requests
        })
        .then((data) => {
          // Ensure there's a success response message from the server
          if (data.success) {
            setMessage("Your message has been sent successfully!");
          } else {
            setMessage(
              data.message ||
                "There was an issue, but your message may still have been sent."
            );
          }
          showSuccessMessage(); // Show success message
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setMessage("There was a network error. Please try again later.");
          showSuccessMessage(); // Show error message
        })
        .finally(() => {
          setLoading(false); // Ensure loading state is stopped
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
          className="col-md-6 jumbotron"
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
    <div style={{ backgroundColor: "#FF6F61" }}>
      <div className="container container-fluid">
        <section>
          <div className="mr-auto ml-auto">
            <h2
              style={{
                fontSize: "16px",
                color: "rgba(0, 0, 0)",
              }}
            >
              Quick query Form:
            </h2>
            {/* <p
              style={{
                fontSize: "20px",
                color: "white",
              }}
            >
              Enter your contact details to book an appointment
            </p> */}
            <form
              onSubmit={handleOnSubmitQuery}
              method="post"
              style={{ padding: "" }}
              className="myForm "
            >
              <div className="row  " style={{ justifyContent: "center" }}>
                <div className="form-group col-lg">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group col-lg">
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    name="birthday"
                    placeholder="D.O.B"
                    required
                  />
                  <label htmlFor="birthday" style={{ color: "white" }}>
                    Birthday:
                  </label>
                </div>

                <div className="form-group col-lg">
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phone"
                    aria-describedby="phoneHelp"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="form-group col-lg">
                  <input
                    type="text"
                    className="form-control"
                    id="service"
                    name="service"
                    placeholder="Service Type"
                    required
                  />
                </div>
                <div className="form-group col-lg">
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                    name="appointmentDate"
                    placeholder="Desired Appointment Date"
                  />
                  <label htmlFor="appointmentDate" style={{ color: "white" }}>
                    Desired Appointment Date
                  </label>
                </div>
                <div className="form-group col-lg">
                  <input
                    type="text"
                    className="form-control"
                    id="robot2"
                    name="robot2"
                    aria-describedby="robotHelp"
                    placeholder="Solve: 2+2?"
                    style={{ width: "" }}
                    required
                  />
                  <label htmlFor="robot2" style={{ color: "white" }}>
                    I am not a robot
                  </label>
                </div>
              </div>
              <div>
                <div
                  className="row  col-lg"
                  style={{ justifyContent: "center" }}
                >
                  <div style={{ display: "flex", margin: "0 auto" }}>
                    <div
                      className="form-group col-lg"
                      style={{ marginLeft: "1rem" }}
                    >
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                      {loading ? (
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>{showSuccessMessage()}</div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuickQuery;
