import { useEffect, useRef, useState } from "react";

// useState, useRef
const HookUseState = () => {
  let [name, setName] = useState([]);

  useEffect(() => {
    getValue.current.value = "";
    getValue.current.focus();
  }, [name]);

  // let [getChange, setGetChange] = useState("");
  let getValue = useRef();

  function handleAdd(eve) {
    // setName((preVal) => [...preVal, getChange]);
    setName((preVal) => [...preVal, getValue.current.value]);
  }
  return (
    <div>
      <h1>Learning useState Hook</h1>
      {/* <input
        type="text"
        value={getChange}
        onChange={(eve) => setGetChange(eve.target.value)}
      /> */}
      <input type="text" ref={getValue} />
      <button onClick={handleAdd}>Add</button>
      {name.map((item, inx) => (
        <h1 key={inx}>{item}</h1>
      ))}
    </div>
  );
};

export default HookUseState;
