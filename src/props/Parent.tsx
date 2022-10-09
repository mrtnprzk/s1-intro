import React from "react";
import Child, { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <>
      <Child color="red" onClick={() => console.log("hi child")}>
        <h3>inside Child</h3>
      </Child>
      <ChildAsFc color="blue" onClick={() => console.log("hi child as fc")}>
        <h3>inside Child as FC</h3>
      </ChildAsFc>
    </>
  );
};

export default Parent;
