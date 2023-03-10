"use client";
import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const Searchbox = () => {
  const [allTodo, setAllTodo] = useState<string[]>(["Sample"]);
  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <>
      <div className="flex space-x-4 mt-8 ">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewTodo(e.target.value);
          }}
          type="text"
          placeholder="Enter a task"
          className="border border-black px-2 py-1"
        />
        <button
          onClick={() => {
            setAllTodo([...allTodo, newTodo]);
          }}
          className="border border-black px-2 py-1"
        >
          Add todo
        </button>
      </div>
      <>
        {allTodo.map((todo, index) => {
          return <TodoList key={index} element={todo} />;
        })}
      </>
    </>
  );
};
