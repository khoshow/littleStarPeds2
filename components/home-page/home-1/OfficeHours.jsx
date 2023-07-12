const OfficeHours = () => {
  return (
    <>
      <div className="office-hours pt-100 backgroundBlue text-center">
        <div>
          <h2 className="main-title fade-up tx-light">Office Hours Designed to Fit Your Schedule</h2>
          <p>
            Our flexible hours are designed to work within your schedule as our
            doors are open after hours and on weekends to accommodate working
            parents.
          </p>
        </div>
        <div className="table-structures" >
          <table className="" style={{margin:"0 auto"}}>
          <tbody className="">
            <tr>
              <td>Monday &nbsp; &nbsp;</td>
              <td>9:00 am - 5:00 pm</td>
            </tr>
            <tr>
              <td>Tuesday &nbsp; &nbsp;</td>
              <td>9:00 am - 5:00 pm</td>
            </tr>
            <tr>
              <td>Wednesday &nbsp; &nbsp;</td>
              <td>9:00 am - 5:00 pm</td>
            </tr>
            <tr>
              <td>Thursday &nbsp; &nbsp;</td>
              <td>9:00 am - 3:00 pm</td>
            </tr>
            <tr>
              <td>Friday &nbsp; &nbsp;</td>
              <td>9:00 am - 5:00 pm</td>
            </tr>
            <tr>
              <td>Saturday &nbsp; &nbsp;</td>
              <td>
                8:30 am - 12:00 pm <br />   
                (One Saturday per month. Please call for availability)           
              </td>
            </tr>
            <tr>
              <td>Sunday  &nbsp;&nbsp;</td>
              <td>Closed</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OfficeHours;
