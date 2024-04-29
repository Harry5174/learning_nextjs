"use client";

// Import necessary modules from Next.js and React
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define the AddTodo component
export const AddTodo = () => {
  // Initialize state for the task input
  const [task, setTask] = useState({ task: "" });

  // Get the router instance for navigation
  const { refresh } = useRouter();

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log("Button has been clicked");
    try {
      // Check if task is not empty
      if (task.task) {
        // Make a POST request to the API endpoint to add a todo
        await fetch("api/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: task.task }),
        });

        // Refresh the page after adding todo
        refresh();

        // Clear the task input field
        setTask({ task: "" });
      }
    } catch (error: any) {
      // Handle errors if form submission fails
      console.log("Handle submit failed: " + error);
    }
  };

  // Render the AddTodo component
  return (
    <div>
      <form className="w-full flex gap-x-3">
        {/* Input field for entering todo */}
        <input
          value={task?.task || ""}
          onChange={(e: any) => setTask({ task: e.target.value })}
          className="rounded-full w-full py-3.5 px-5 border focus:outline-secondary"
          type="text"
          placeholder="Todo"
        />
        {/* Button to submit todo */}
        <button
          type="button"
          onClick={handleSubmit}
          className="p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary"
        >
          {/* Icon for the button */}
          <Image src={"/Vector.svg"} width={18} height={18} alt="vector" />
          {/* Screen reader text for the button */}
          <span className="sr-only">Button Description</span>
        </button>
      </form>
    </div>
  );
};
