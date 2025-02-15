import React from "react";
import "./Readmore.css";
import { data } from "../../components/constants";

const CardWithOverlay = (props) =>{
    const {imageUrl,title,btnTitle} = props;
    return (
        <div className="app__cardoverlay">
            <div className="app__cardoverlay-img">
                <img src={imageUrl} alt="imageUrl" />
            </div>
            <div className="app__cardoverlay-overlay">
                <p className="p__opensans">{title}</p>
                <p className="p__opensans" style={{color: "#4CAF4F"}}>{btnTitle}</p>
            </div>  
        </div>
    )
}

const Readmore = () => {
  return (
    <div className="app__readmore section__padding flex__center">
      <div className="app__readmore-heading">
        <h1 className="p__cormorant" style={{marginBottom: "1rem"}}>Caring is the new marketing</h1>
        <p className="p__opensans">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="app__readmore-content">
        {data.readmoreClient.map((read,index)=>(
            <CardWithOverlay imageUrl={read.imageUrl} title={read.title} btnTitle={read.btntitle} />
        ))}
      </div>
    </div>
  );
};

export default Readmore;
