"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export  const  AddTodo = () => {
  const [task, setTask] = useState({ task: "" });

  const { refresh } = useRouter();

  const handleSubmit = async () => {
    console.log("button has been clicked");
    try {
      if (task.task) {
        await fetch("api/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: task.task }),
        });
        refresh();

        setTask({ task: "" });
      }
    } catch (error: any) {
      console.log("Handle submit failed: " + error);
    }
  };

  return (
    <div>
      <form className="w-full flex gap-x-3">
        <input
          value={task?.task || ""}
          onChange={(e: any) => setTask({ task: e.target.value })}
          className="rounded-full w-full py-3.5 px-5 border focus:outline-secondary"
          type="text"
          placeholder="Todo"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary"
        >
          <Image src={"/Vector.svg"} width={18} height={18} alt="vector" />
          <span className="sr-only">Button Description</span>
        </button>
      </form>
    </div>
  );
};
