import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {children}
      <button onClick={onClick}>{color}</button>
    </div>
  );
};

export const ChildAsFc: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {children}
      <button onClick={onClick}>{color}</button>
    </div>
  );
};

export default Child;
