import React from "react";
import images from "../../components/constants/images";
import "./OurClient.css"

const ClientLogos = ({ imgUrl }) => {
  return (
      <img className="app__ourclient-single_image" src={imgUrl} alt="client images" />
  );
};

const OurClient = () => {
  return (
    <div
      className="section__padding flex__center"
      style={{ flexDirection: "column" }}
    >
      <h1 className="p__cormorant" style={{ marginBottom: "1rem" }}>
        Our Clients
      </h1>
      <p className="p__opensans">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="app__ourclients-images_container_main">
        {[
          images.client1,
          images.client2,
          images.client4,
          images.client5,
          images.client6,
          images.client7,
        ].map((clientUrlImage, index) => {
          return (
            <div className="app__ourclients-images_container" key={index}>
              <ClientLogos imgUrl={clientUrlImage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurClient;
