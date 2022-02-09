import "./services.scss";

const Services = (props) => {
  return (
    <div className="services">
      <div className="container">
        <p className="text-center mb-5">
          Loyal Textiles we are all the time concerned about the way we create
          wealth, the way we conduct our business and we try to be not just
          legally compliant but much more than that. Here are few Sourcing and
          Products development we provide.the way we conduct our business and we
          try to be not just legally compliant but much more than that. Here are
          few Sourcing and Products development we provide
        </p>
        <div className="row">
          {props.sourcingService.map((s) => (
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="service-card">
                {s.icon}
                <h3>{s.serviceName}</h3>
                <p>{s.description}</p>
                {/* <span>
                  {s.type} <BsArrowRightShort />
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
