// Import axios for making HTTP requests and AxiosError for error handling
import axios, { AxiosError } from "axios";
// Import NextRequest and NextResponse for handling Next.js server-side requests and responses
import { NextRequest, NextResponse } from "next/server";

// Define the base URL for the backend API
const BASE_URL = "http://127.0.0.1:8000";

// Define the interface for the data returned by GET request
export interface getTodo {
  id: number;
  task: string;
}

// Define the interface for the data expected by POST request
interface postTodo {
  title: string;
  description: string;
}

// Define the interface for todo items
interface todo {
  id: number;
  title: string;
  description: string;
}

// Handler for GET request
export async function GET() {
  try {
    // Construct the URL for fetching todos
    const url = `${BASE_URL}/todos`;
    console.log("Requesting URL: ", url);

    // Make the GET request to fetch todos
    const response = await axios.get(url);
    console.log("Todos successfully retrieved!");

    // Modify the response data to match the getTodo interface
    const modifiedResponse: getTodo[] = await response.data.map(
      (item: any) => ({
        id: item.id,
        task: item.description,
      })
    );

    // Return the modified response
    return NextResponse.json(modifiedResponse);
  } catch (error: any) {
    // Handle errors if GET request fails
    return NextResponse.json(
      { error: `Error retrieving todos: ${error}` },
      { status: 500 }
    );
  }
}

// Handler for POST request
export async function POST(request: NextRequest) {
  try {
    // Construct the URL for creating todo
    const url = `${BASE_URL}/todos`;
    console.log("Requesting URL: ", url);

    // Parse the request body from ReadableStream to JSON
    const requestBody = await request.json();
    console.log("Parsed Request Body: ", requestBody);

    // Validate request body
    if (!requestBody.task || typeof requestBody.task !== "string") {
      throw new Error("Task field is required and must be a string");
    }

    // Modify the request body to match the postTodo interface
    const modifiedRequest: postTodo = {
      title: "nextjs-todo",
      description: requestBody.task,
    };

    // Make the POST request to create todo
    const response = await axios.post(url, modifiedRequest);
    console.log("Todo created successfully!");
    console.log("Modified Request: ", modifiedRequest);

    // Return the response data from the backend API
    return NextResponse.json(response.data);
  } catch (error: any) {
    // Handle errors if POST request fails
    console.error("Error handling POST request: ", error);
    return NextResponse.json(
      { error: `Error handling POST request: ${error.message}` },
      { status: 500 }
    );
  }
}

// Handler for PUT request
export async function PUT(request: NextRequest) {
  try {
    // Parse the request body to JSON
    const req = await request.json();
    console.log("Parsed Request Body: ", req);

    // Construct the URL with the todo item ID
    const url = `${BASE_URL}/todos/${req.id}`;

    // Make the PUT request to update todo
    const response = await axios.put(url, {
      title: "next-js todo-PUT",
      description: req.task,
    });
    console.log("Todo updated successfully!");

    // Return the response data from the backend API
    return NextResponse.json(response.data);
  } catch (error: any) {
    // Handle errors if PUT request fails
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Axios error: ", axiosError.message);
      return NextResponse.json(
        { error: `Error updating todo: ${axiosError.message}` },
        { status: axiosError.response?.status || 500 }
      );
    } else {
      console.error("Error handling PUT request: ", error);
      return NextResponse.json(
        { error: `Error handling PUT request: ${error.message}` },
        { status: 500 }
      );
    }
  }
}

// Handler for DELETE request
export async function DELETE(request: NextRequest) {
  try {
    // Parse the request body to JSON
    const req = await request.json();
    console.log("Parsed Request Body: ", req);

    // Construct the URL with the todo item ID
    const url = `${BASE_URL}/todos/${req.id}`;

    // Make the DELETE request to delete todo
    const response = await axios.delete(url);
    console.log("Todo deleted successfully!");

    // Return success message
    return NextResponse.json({ message: "Todo deleted successfully!" });
  } catch (error: any) {
    // Handle errors if DELETE request fails
    console.error("Error handling DELETE request: ", error);
    return NextResponse.json(
      { error: `Error handling DELETE request: ${error.message}` },
      { status: 500 }
    );
  }
}
