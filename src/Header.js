import loudspeaker from "./loudspeaker.svg";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <h1>Number Converter</h1>
          <p>Convert any number to text. Have fun!</p>
        </div>
        <img src={loudspeaker} alt="loudspeaker" />
      </div>
    </header>
  );
};

export default Header;
