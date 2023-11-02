import React, { useEffect, useId, useReducer, useRef } from "react";

let intialValue = [
  { id: 1, user: "Ganesh", isActive: false },
  { id: 2, user: "kanna", isActive: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return state.map((user) => {
        if (user.user == action.user) {
          return { ...user, isActive: true };
        }
        return user;
      });
      break;
    case "inactive":
      return state.map((user) => {
        if (user.user == action.user) {
          return { ...user, isActive: false };
        }
        return user;
      });
      break;
    default:
      return state;
      break;
  }
}

// Hooks - useReducer, useId, useRef -> Refer HookUseState for reference.
const HookuseReduceruseIduseRef = () => {
  let [userStatus, dispatch] = useReducer(reducer, intialValue);

  useEffect(() => {
    // console.log(getRef.current.innerText);
    getRef.current.innerText = "Ganesh Kanna";
    getRef.current.style.backgroundColor = "red";
  }, []);
  let getNewId = useId();
  let getNewId2 = useId();
  let getRef = useRef();
  let getName = useRef();
  //   console.log(getRef);
  return (
    <div>
      <h1>Learning Hooks - useReducer, useId, useRef</h1>
      <p id={getNewId} ref={getRef}>
        The new id is {getNewId}
      </p>
      <p id={getNewId2}>The new id is {getNewId2}</p>
      {/* <input type="text" ref={getRef} /> */}

      <input type="text" ref={getName} />
      <button
        onClick={() => {
          dispatch({ type: "active", user: getName.current.value });
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          dispatch({ type: "inactive", user: getName.current.value });
        }}
      >
        In-Active
      </button>
      {userStatus &&
        userStatus.map((itm, inx) => (
          <h1>
            {itm.user} - {itm.isActive.toString()}
          </h1>
        ))}
    </div>
  );
};

export default HookuseReduceruseIduseRef;
