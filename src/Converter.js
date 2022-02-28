import React from "react";

const Converter = () => {
  return (
    <section>
      <div className="container">
        <div className="box">
          <h2>Convert a number!</h2>
          <form action="/action_page.php">
            <label for="quantity">Add a number:</label>
            <input
              className="input"
              name="number"
              type="number"
              placeholder="1234..."
              required
            ></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Converter;
