import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "600px",
        marginLeft: '400px',
        marginRight: '400px'
      }}
      className='pa3'
    
    >
      {props.children}
    </div>
  );
};

export default Scroll;
