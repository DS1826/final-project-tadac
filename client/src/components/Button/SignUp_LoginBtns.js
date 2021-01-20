import React from "react";

export default function SignUpBtn(props) {
  const style ={
    base:{
      backgroundColor: "#d6efc7",
      borderRadius: "7px",
      margin: "1.5rem 1rem 0rem 1rem",
      fontFamily:"Verdana, Geneva, Tahoma, sans-serif;",
      fontSize:"1.2rem",
      cursor:"pointer"
    }
  }
    return (
      <div>
          <button style={style.base}>{props.children}</button>
      </div>
    );
  }
  