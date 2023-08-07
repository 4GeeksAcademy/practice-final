import React from "react";

const Button = ({ text, backgroundColor, color, buttonFunc }) => {
    const style = {
      color: color,
      backgroundColor: backgroundColor,
      border: "none",
      borderRadius: "6px",
      padding: "10px 25px",
      
    };
    return (
        <button style={style} onClick={buttonFunc}>
          {text}
        </button>
    );
  };

  Button.defaultProps = {
    text: "Click Me!",
    backgroundColor: "green",
    color: "white",
  };

  export default Button;