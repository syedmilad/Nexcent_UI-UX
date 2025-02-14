import React from "react";
import { images } from "../../components/constants";
import "./Customer.css"

const ClientImage = ({imageUrl}) =>{
  return (
   <div className="app__client-image">
     <img src={imageUrl} alt="imageUrl" />
   </div>
  )
}

const Customer = () => {
  return (
    <div className="app__customer section__padding flex__center">
      <div className="app__wrapper__img">
        <img src={images.tesla} alt="Tesla" />
      </div>
      <div className="app__wrapper__info">
        <p className="p__opensans">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="p__opensans" style={{color: "#4CAF4F", margin: "0.5rem 0"}}>Tim Smith</p>
        <p className="p__opensans">British Dragon Boat Racing Association</p>
        <div className="app__customer-clients">
            {[images.client1,images.client2,images.client4,images.client5,images.client6,images.client7].map((clientImg,index)=>(
              <ClientImage imageUrl={clientImg} key={index+ 1} />
            ))}
            <div className="app__customer-cleint_details">
                <p className="p__opensans">Meet all customers</p>
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
