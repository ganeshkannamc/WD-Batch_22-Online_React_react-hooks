import React, { useEffect, useLayoutEffect } from "react";

// useEffect, useLayoutEffect, useId
const HookUseEffectUseLayoutEffectUseId = () => {
  // When rendering first JS, JSX, useEffect
  //   When using useLayoutEffect it will run even before useEffect
  useEffect(() => console.log("3 - Inside useEffect"), []);
  
  useLayoutEffect(() => console.log("Running before useLayout Hook"), []);

  console.log("1 - Inside JS");
  return (
    <div>
      <h1>Learning Hooks useEffect, useLayoutEffect, useId</h1>
      <h1>When component rendering first JS, JSX, useEffect</h1>
      <h1>When using useLayoutEffect it will run even before useEffect</h1>
      {console.log("2 - Inside JSX")}
    </div>
  );
};

export default HookUseEffectUseLayoutEffectUseId;
