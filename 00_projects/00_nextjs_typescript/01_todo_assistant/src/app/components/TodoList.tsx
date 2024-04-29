// Import necessary modules
import DeleteTodo from "./DeleteTodo";
import { getTodo } from "../api/todo/route";

// Function to fetch todo data from the server
const getData = async () => {
  try {
    // Make a GET request to fetch todo data
    const res = await fetch(
      `http://127.0.0.1:3000/api/todo?timestamp=${Date.now()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Ensure no caching
          "cache-control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );

    // Check if response is okay
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    // Parse the response JSON
    const result = await res.json();
    return result;
  } catch (error: any) {
    // Log any errors encountered during fetching
    console.log(error);
    return null;
  }
};

// Define the TodoList component
const TodoList = async () => {
  // Fetch todo data
  const res: getTodo[] = await getData();

  // Log the fetched data
  console.log(res);

  // Render the TodoList component
  return (
    <div
      className="max-h-[350px] overflow-y-auto mb-4"
      style={{ maxHeight: "350px", borderRadius: "10px" }}
    >
      {/* Map over the fetched todo items */}
      {res.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 rounded-lg py-4 px-6 flex items-center justify-between gap-x-3 shadow my-2 mr-2"
        >
          {/* Circle */}
          <div className="h-3 w-3 bg-secondary rounded-full"></div>
          {/* Title */}
          <p className="text-lg font-semibold">{item.task}</p>
          {/* Delete todo component */}
          <div className="ml-auto">
            <DeleteTodo id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the TodoList component
export default TodoList;
