"use client";

// Import necessary modules from Next.js and React
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define the DeleteTodo component
const DeleteTodo = ({ id }: { id: number }) => {
  // Get the router instance for navigation
  const router = useRouter();

  // Function to handle deletion of todo
  const handleDelete = async () => {
    try {
      // Make a DELETE request to the API endpoint to delete the todo item
      const res = await fetch("/api/todo", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      // Check if the deletion was successful
      if (res.ok) {
        // Refresh the page after deleting todo item
        router.refresh();
      } else {
        // Log an error if deletion failed
        console.error("Failed to delete todo item.");
      }
    } catch (error) {
      // Log an error if an error occurred while deleting todo item
      console.error("An error occurred while deleting todo item:", error);
    }
  };

  // Render the DeleteTodo component
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="p-3 flex-shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary"
    >
      {/* Icon for the delete button */}
      <Image src={"/delete.svg"} width={18} height={18} alt="delete" />
      {/* Screen reader text for the delete button */}
      <span className="sr-only">Delete Todo</span>
    </button>
  );
};

// Export the DeleteTodo component
export default DeleteTodo;
