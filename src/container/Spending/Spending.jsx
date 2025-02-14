import React from "react";
import { images } from "../../components/constants";

const Spending = () => {
  return (
    <div className=" app__wrapper section__padding flex__center" style={{minHeight: "0"}} >
      <div className="app__wrapper__img" >
        <img src={images.spending} alt="Spending Image" />
      </div>
      <div className="app__wrapper__info" >
        <h1 className="p__cormorant">The unseen of spending three years at Pixelgrade</h1>
        <p className="p__opensans" style={{margin: "2rem 0"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button  className="custom__button">Learn More</button>
      </div>
    </div>
  );
};

export default Spending;
