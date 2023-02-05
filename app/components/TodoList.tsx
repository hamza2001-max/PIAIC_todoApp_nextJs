"use client";
import React, { useState } from "react";

interface propInterface {
  element: string
}

export const TodoList = (props: propInterface) => {
  const[checked, setChecked] = useState(false);
  const handleChange = () => {
    checked === false ? setChecked(true) : setChecked(false); 
  }
  return (
    <>
        <div className="w-96 bg-red-300 font-semibold flex justify-between mt-2 p-4">
          {checked === false ? <h1>{props.element}</h1> : <h1 className="text-slate-500 line-through">{props.element}</h1>}
          <input type="checkbox" onChange={handleChange}/>
        </div>
    </>
  );
};
