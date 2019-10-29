import React, { useEffect } from "react";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
  }, [props.persons]); // Executes when persons changes. Pass empty array if you only want it to run for the first time.

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  const assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push("red");
  }
  if (props.personsLength <= 1) {
    assignedClasses.push("bold");
  }

  if (props.showPersons) {
    style.backgroundColor = "red";
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
