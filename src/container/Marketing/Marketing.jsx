import React from "react";
import { images } from "../../components/constants";

const Marketing = () => {
  return (
    <div style={{minHeight: "0"}} className="app__marketing app__wrapper section__padding">
      <div className="app__wrapper__img">
        <img src={images.marketing} alt="marketing image" />
      </div>
      <div className="app__wrapper__info">
        <h1 className="p__cormorant">
          How to design your site footer like we did
        </h1>
        <p style={{margin: "1rem 0"}} className="p__opensans">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="custom__button">learn More</button>
      </div>
    </div>
  );
};

export default Marketing;
