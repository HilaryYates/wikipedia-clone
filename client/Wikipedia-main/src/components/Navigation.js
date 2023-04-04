import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = ({ onRouteChange, name }) => {
  const capitalizeName = (name) => {
    let lowerCaseInName = Array.from(name).slice(1);
    lowerCaseInName = lowerCaseInName.join("");
    const fullName = Array.from(name)[0].toUpperCase().concat(lowerCaseInName);
    return Array.from(fullName).join("");
  };
  return (
    <div>
      <p className='sign-out-text'>Hello {capitalizeName(name)}!</p>
      {/* <button onClick={() => onRouteChange("signed-out")}>Sign Out</button> */}
      <Button
        onClick={() => onRouteChange("signed-out")}
        variant='primary'
        className='sign-out-btn'
      >
        Sign out
      </Button>
    </div>
  );
};

export default Navigation;
