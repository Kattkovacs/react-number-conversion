import React, { useState } from "react";

const Converter = () => {
  const [input, setInput] = useState();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(numberToText(input));
    e.target.reset();
  };

  function numberToText(number) {
    var NS = [
      { value: 1000000000000000000000, str: "sextillion" },
      { value: 1000000000000000000, str: "quintillion" },
      { value: 1000000000000000, str: "quadrillion" },
      { value: 1000000000000, str: "trillion" },
      { value: 1000000000, str: "billion" },
      { value: 1000000, str: "million" },
      { value: 1000, str: "thousand" },
      { value: 100, str: "hundred" },
      { value: 90, str: "ninety" },
      { value: 80, str: "eighty" },
      { value: 70, str: "seventy" },
      { value: 60, str: "sixty" },
      { value: 50, str: "fifty" },
      { value: 40, str: "forty" },
      { value: 30, str: "thirty" },
      { value: 20, str: "twenty" },
      { value: 19, str: "nineteen" },
      { value: 18, str: "eighteen" },
      { value: 17, str: "seventeen" },
      { value: 16, str: "sixteen" },
      { value: 15, str: "fifteen" },
      { value: 14, str: "fourteen" },
      { value: 13, str: "thirteen" },
      { value: 12, str: "twelve" },
      { value: 11, str: "eleven" },
      { value: 10, str: "ten" },
      { value: 9, str: "nine" },
      { value: 8, str: "eight" },
      { value: 7, str: "seven" },
      { value: 6, str: "six" },
      { value: 5, str: "five" },
      { value: 4, str: "four" },
      { value: 3, str: "three" },
      { value: 2, str: "two" },
      { value: 1, str: "one" },
    ];

    var result = "";
    for (var n of NS) {
      if (number >= n.value) {
        if (number <= 20) {
          result += n.str;
          number -= n.value;
          if (number > 0) result += " ";
        } else {
          var t = Math.floor(number / n.value);
          var d = number % n.value;
          if (d > 0) {
            return numberToText(t) + " " + n.str + " " + numberToText(d);
          } else {
            return numberToText(t) + " " + n.str;
          }
        }
      }
    }
    return result;
  }

  return (
    <section className="boxes">
      <div className="container">
        <div className="box">
          <h2>Convert a number!</h2>
          <form action="/action_page.php" onSubmit={handleSubmit}>
            <label for="number">Add a number:</label>
            <input
              className="input"
              name="number"
              type="number"
              placeholder="1234..."
              required
              onChange={handleChange}
            ></input>
            <input type="submit" value="Submit"></input>
          </form>
          <div>
            <h2 className="output">Your number {input} in text:</h2>
            <h3>
              {text ? "'" + text + "'" : ".............................."}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Converter;
