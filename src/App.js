import React, { useState } from "react";
import OneColor from "./OneColor";
import Values from "values.js";


export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#3669e0").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
    return (
      <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)}
          placeholder="#3669e0"
          className={`${error? "error" : null}`}/>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <OneColor
          key={index}
          {...color}
          index={index}
          hexColor={color.hex}/>
        })}
      </section>
      </>
  )
}

