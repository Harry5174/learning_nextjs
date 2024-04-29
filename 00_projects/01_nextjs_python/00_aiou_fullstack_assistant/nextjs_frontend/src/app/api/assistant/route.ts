// Import axios for making HTTP requests and AxiosError for error handling
import axios, { AxiosError } from "axios";
// Import NextRequest and NextResponse for handling Next.js server-side requests and responses
import { NextRequest, NextResponse } from "next/server";

// Define the base URL for the backend API
const BASE_URL = "http://127.0.0.1:8000";

export interface prompt {
    thread_id: string;
    message: string;
}

// Handler for GET request
export async function GET() {
  try {
    // Construct the URL for fetching todos
    const url = `${BASE_URL}/start`;
    console.log("Requesting URL: ", url);

    // Make the GET request to fetch todos
    const response = await axios.get(url);
    console.log("thread id retrieved successfully!!nxt");

    // Return the modified response
    return NextResponse.json(response.data);
  } catch (error: any) {
    // Handle errors if GET request fails
    return NextResponse.json(
      { error: `Error retrieving todos: ${error}` },
      { status: 500 }
    );
  }
}


// // Handler for POST request
export async function POST(request: NextRequest) {
  try {
    // if (!thread_id) throw new Error("no thread id provided!")

    const url = `${BASE_URL}/chat`;
    console.log("Requesting URL: ", url);

    const requestBody = await request.json();
    console.log("Parsed Request Body: ", requestBody);

    if (!requestBody.user_input || typeof requestBody.user_input !== "string") {
        throw new Error("prompt field is required and must be a string");
      }
    if (!requestBody.thread_id || typeof requestBody.thread_id !== "string") {
        throw new Error("thread id is required and must be a string");
    }

    const userInput : prompt = {
        thread_id: requestBody.thread_id,
        message: requestBody.user_input
    }

    const response = await axios.post(url,userInput);

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