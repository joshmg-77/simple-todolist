import React from "react";
//input Component
const Input = (props) => {
  const Handleds = (e) => {
    let target = e.target;
    document.querySelector(".btnBlur").scrollIntoView();
    return props.manage(target.value);
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        value={props.value}
        name="newTask"
        onChange={Handleds}
        autofocus="true"
        placeholder="What do you will do?? 🤔✍"
      />
    </>
  );
};
export default Input;
