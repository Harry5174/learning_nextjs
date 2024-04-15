"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DeleteTodo = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/todo", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete todo item.");
      }
    } catch (error) {
      console.error("An error occurred while deleting todo item:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="p-3 flex-shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary"
    >
      <Image src={"/delete.svg"} width={18} height={18} alt="delete" />
      <span className="sr-only">Delete Todo</span>
    </button>
  );
};

export default DeleteTodo;
