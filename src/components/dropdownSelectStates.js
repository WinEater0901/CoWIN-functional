import React from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/style.css";

const DropdownSelectStates = (props) => {
  return (
    <>
      <Dropdown
        pre-scrollable
        drop="right"
        style={{
          whiteSpace: "nowrap",
          position: "sticky",
          top: "20px",
          backgroundColor: "transparent",
        }}
        className="slideinanimation mb-3"
      >
        <Dropdown.Toggle  variant="outline-success" id="dropdown-basic" style={{color:"white",boxShadow: "5px 5px 8px #888888"}}>
          <b>{props.stateName}</b>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="scrollbarstyle style-2"
          style={{ height: "auto", maxHeight: "645px", overflowX: "hidden", boxShadow: "5px 5px 8px #888888" }}
        >
          {props.states.map((state) => (
            <Dropdown.Item className="zoomeffect" onClick={() => props.stateClickHandler(state)}>
              {state.state_name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownSelectStates;
