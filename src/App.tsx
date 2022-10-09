import React from "react";
import EventComponents from "./events/EventComponents";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

function App() {
  return (
    <>
      <h1>Props:</h1>
      <Parent />
      <div style={{ height: "3rem", width: '30rem', borderBottom: 'solid 1px gray' }} />
      <h1>State & Ref:</h1>
      <GuestList />
      <div style={{ height: "2rem", width: '15rem', borderBottom: 'solid 0.5px gray' }} />
      <UserSearch/>
      <div style={{ height: "3rem", width: '30rem', borderBottom: 'solid 1px gray' }} />
      <h1>Events:</h1>
      <EventComponents />
    </>
  );
}

export default App;
