import DeletTodo from "./DeleteTodo";
import { getTodo } from "../api/todo/route";

const getData = async () => {
  const res = await fetch(
    `http://127.0.0.1:3000/api/todo?timestamp=${Date.now()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );

  try {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

const TodoList = async () => {
  const res: getTodo[] = await getData();

  console.log(res);

  return (
    <div
      className="max-h-[350px] overflow-y-auto mb-4"
      style={{ maxHeight: "350px", borderRadius: "10px" }}
    >
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
            <DeletTodo id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
