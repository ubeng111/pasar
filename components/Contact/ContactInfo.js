import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>0896871468</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="content">
                <h4>E-mail</h4>
                <p>support@pasar.web.id</p>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="content">
                <h4>Location</h4>
                <p>
                  Cianjur, Indonesia <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
