import React from "react";

export default function Sum(props) {
  const c = Number(props.a) + Number(props.b);
  return (
    <div>
      <h3>Sum = {c}</h3>
    </div>
  );
}