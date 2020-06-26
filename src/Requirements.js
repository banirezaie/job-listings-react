import React from "react";

const Requirements = (props) => {
  const languages = props.data.languages || [];
  const tools = props.data.tools || [];
  const list = [props.data.role, props.data.level, ...languages, ...tools];

    function requirementHandler(e){
        
    }
  return (
    <div className="requirements">
      {list.map((x, i) => {
        return (
          <div key={i} className="eachRequirement" onClick={requirementHandler}>
            {x}
          </div>
        );
      })}
    </div>
  );
};

export default Requirements;
