import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "http://127.0.0.1:8000";

export interface getTodo {
  id: number;
  task: string;
}

interface postTodo {
  title: string;
  description: string;
}

interface todo {
  id: number;
  title: string;
  description: string;
}

export async function GET() {
  try {
    const url = `${BASE_URL}/todos`;
    console.log("requesting url: ", url);

    const response = await axios.get(url);
    console.log(`Todos successfully retrieved!`);
    // console.log(response.data);

    const modifiedResponse: getTodo[] = await response.data.map(
      (item: any) => ({
        id: item.id,
        task: item.description,
      })
    );

    return NextResponse.json(modifiedResponse);
  } catch (error: any) {
    return NextResponse.json(
      { error: `Error retrieving todos : ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const url = `${BASE_URL}/todos`;
    console.log(`Requesting URL: ${url}`);

    // Parse the request body from ReadableStream to JSON
    const requestBody = await request.json();
    console.log("Parsed Request Body:", requestBody);

    if (!requestBody.task || typeof requestBody.task != "string") {
        throw new Error("Task field is required and must be a string");
      }

    const modifiedRequest: postTodo = await {
      title: "nextjs-todo",
      description: requestBody.task,
    };

    const response = await axios.post(url, modifiedRequest);
    console.log(`todo created successfully!`);
    console.log(modifiedRequest);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: `Error handling POST request: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Parse the request body to JSON
    const req = await request.json();
    console.log("Parsed request body: ", req);

    // Construct the URL with the todo item ID
    const url = `${BASE_URL}/todos/${req.id}`;

    // Make the PUT request to the backend API
    const response = await axios.put(url, {
      title: "next-js todo-PUT",
      description: req.task,
    });
    console.log("Updated todo successfully!!");

    // Return the response data from the backend API
    return NextResponse.json(response.data);
  } catch (error: any) {
    // Check if the error is an AxiosError
    if (axios.isAxiosError(error)) {
      // Now we can safely cast error to AxiosError
      const axiosError = error as AxiosError;
      console.error("Axios error:", axiosError.message);
      // Handle the axios error here
      return NextResponse.json(
        { error: `Error updating todo: ${axiosError.message}` },
        { status: axiosError.response?.status || 500 }
      );
    } else {
      // Error is not an AxiosError
      console.error("Error handling PUT request: ", error);
      return NextResponse.json(
        { error: `Error handling PUT request: ${error.message}` },
        { status: 500 }
      );
    }
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const req = await request.json();
    console.log("Parsed request body: ", req);
    const url = `${BASE_URL}/todos/${req.id}`;

    const response = await axios.delete(url);
    console.log("Todo deleted successfully!");

    return NextResponse.json({ message: "Todo deleted successfully!" });
  } catch (error: any) {
    console.error("Error handling DELETE request: ", error);
    return NextResponse.json(
      { error: `Error handling DELETE request: ${error.message}` },
      { status: 500 }
    );
  }
}

