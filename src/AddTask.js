import React from "react";

const randomId = () => {
  return Math.random().toString(36).substring(2, 9);
};
console.log(randomId());

function AddTask() {
  return <div>AddTask {randomId()}</div>;
}

export default AddTask;
