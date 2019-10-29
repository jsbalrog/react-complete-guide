import React, { useEffect, useRef, useContext } from "react";
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  const toggleBtnRef = useRef();
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // Runs after every render cycle
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button style={style} onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
