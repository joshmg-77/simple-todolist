import React from "react";
//List Component
const Listed = (props) => {
  let keyunique = 0;
  return props.Lists.map((elements, index) => (
    <li
      className="list-group-item list-group-item-success d-flex justify-content-between even-odd"
      key={keyunique++}
    >
      {keyunique + "- " + elements}
      <div className="btn-group">
        <button
          onClick={() => props.Delete(index)}
          className=" btn btn-danger text-justify"
        >
          &times;
        </button>
      </div>
    </li>
  ));
};
export default Listed;
