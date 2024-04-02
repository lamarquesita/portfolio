/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ stateProp, className, text = "CONTACT ME", arrowClassName, arrow = "/img/arrow.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <button
      className={`button ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="title">{text}</div>
      <div className={`circle ${state.state}`}>
        {state.state === "default" && (
          <>
            <div className="dot" />
            <img className={`arrow ${arrowClassName}`} alt="Arrow" src={arrow} />
          </>
        )}

        {state.state === "hovered" && <img className="img" alt="Arrow" src="/img/arrow-1.svg" />}
      </div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  stateProp: PropTypes.oneOf(["hovered", "default"]),
  text: PropTypes.string,
  arrow: PropTypes.string,
};
