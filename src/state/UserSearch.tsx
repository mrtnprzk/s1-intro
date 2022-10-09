import React, { useRef, useState } from "react";
import { useEffect } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Sarah", age: 25 },
  { name: "Alex", age: 29 },
  { name: "Michael", age: 21 },
  { name: "Martin", age: 27 },
  { name: "Conor", age: 22 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState<User | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    const foundByName = users.find((user: User) => {
      return user.name === name;
    });
    setFoundUser(foundByName);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h3>User Search</h3>
      {foundUser && (
        <h5>
          Name: {foundUser.name} - Age: {foundUser.age}
        </h5>
      )}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      {users?.map((user, index) => (
        <li key={index}>
          Name: {user.name} - Age: {user.age}
        </li>
      ))}
    </div>
  );
};

export default UserSearch;
