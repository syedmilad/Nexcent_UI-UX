import React from "react";
import { data } from "../../components/constants";
import { MemberCard } from "../../components";
import "./Member.css"

const Member = () => {
  return (
    <div className="app__member">
      <div className="app__member-content">
        <h1 className="p__cormorant">Helping a local </h1>
        <h1 className="p__cormorant" style={{color: "#4CAF4F"}}>business reinvent itself</h1>
        <p className="p__opensans">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="app__member-details">
          <div className="app__member-details_container">
          {data.memberDetails.map((member,index)=>(
            <MemberCard imageUrl={member.imageUrl} subTitle={member.subTitle} number={member.number} key={index+1} />
          ))}
          </div>
      </div>
    </div>
  );
};

export default Member;
