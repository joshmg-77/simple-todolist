import React from "react";
//Save Button Component

const Button = (props) => {
  return (
    <>
      <input
        type="submit"
        className="btn btn-primary justify-content-center w-25 btnBlur"
        onClick={(e) => props.HandledSave(e)}
        value="save"
      />
    </>
  );
};
export default Button;
