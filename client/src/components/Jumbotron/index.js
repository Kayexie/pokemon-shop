import React from "react";

function Jumbotron({ children }) {
  return (
    <div style={{paddingLeft:10, paddingTop: 250, textAlign: "center"}} >
      {children}
    </div>
  );
}

export default Jumbotron;
