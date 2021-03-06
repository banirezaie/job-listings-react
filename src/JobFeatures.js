import React from "react";
import data from "./data.json";
import Requirements from "./Requirements";

const JobFeatures = () => {
  return data.map((x, i) => {
    return (
      <div key={i}>
        {console.log(x)}
        <div className={x.featured ? "parentJobDivFeatured" : "parentJobDiv"}>
          <div className="flexDiv">
            <div className="logo">
              <img src={x.logo} alt="logo" />
            </div>
            <div className="cardInformation">
              <h3 className="companyName">
                {x.company} {x.new ? <span className="new">NEW!</span> : null}
                {x.featured ? <span className="featured">FEATURED</span> : null}
              </h3>
              <h1 className="title">{x.position}</h1>
              <p className="jobInformation">
                {x.postedAt} . {x.contract} . {x.location}
              </p>
            </div>
          </div>
          <Requirements data={x} />
        </div>
      </div>
    );
  });
};

export default JobFeatures;
