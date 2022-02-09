import "./contact-form.scss";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h1 className="our-capabilities">Our Capabilities</h1>
            <p>
              At Loyal Textiles we are all the time concerned about the way we
              create wealth, the way we conduct our business and we try to be
              not just legally compliant but much more than that. At Loyal
              Textiles we are all the time concerned about the way we create
              wealth.
            </p>

            <p>
              At Loyal Textiles we are all the time concerned about the way we
              create wealth, the way we conduct.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h2 className="contact-us" style={{ textTransform: "uppercase" }}>
              Contact Us
            </h2>

            <form>
              <label>Name</label>
              <input placeholder="Name" name="" />
              <label>Email</label>
              <input placeholder="Email" name="" />
              <label>Phone no</label>
              <input placeholder="Phone no" name="" />
              <label>Message</label>
              <textarea placeholder="Message" name="" />
              <button className="btn btn-sm">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
