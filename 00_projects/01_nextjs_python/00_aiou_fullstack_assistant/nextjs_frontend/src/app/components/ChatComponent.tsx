"use client";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function ChatComponent() {
  const [threadId, setThreadId] = useState("");
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState("");
  const [threadIdExists, setThreadIdExists] = useState(true);

  // Function to fetch thread ID
  const fetchThreadId = async () => {
    try {
      const response = await axios.get("/api/assistant");
      setThreadId(response.data.thread_id);
      setThreadIdExists(true); 
      console.log("Thread ID retrieved: ", response.data.thread_id);
    } catch (error) {
      console.error("Error fetching thread ID: ", error);
      setThreadIdExists(false); 
    }
  };

  const startConversation = async () => {
    try {
      setConversation("");
      fetchThreadId();
    } catch (error) {
      console.error("Error starting conversation: ", error);
    }
  };

  //icons
  const userIcon = "👤";
  const assistantIcon = "🤖";

  const sendMessage = async () => {
    try {
      if (threadId == "") {
        setThreadIdExists(false);
      }
      const res = await axios.post("/api/assistant", {
        thread_id: threadId,
        user_input: userInput,
      });
      console.log("Assistant Response: ", res.data.response);
      setConversation(
        (prevConversation) =>
          prevConversation +
          `\n${userIcon} ${userInput}\n${assistantIcon} ${res.data.response}\n`
      );
      setUserInput("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  // Return JSX for ChatComponent
  return (
    <div className="flex flex-col">
      {/* Start Conversation button */}
      <Button
        className={`ml-2 rounded-lg p-2 text-black hover:text-white ${
          threadIdExists ? "bg-gray-200" : "bg-red-500" // Apply conditional styles
        }`}
        onClick={startConversation}
      >
        Start A New Conversation
      </Button>

      {/* Conversation textarea */}
      <div className="mr-4 flex-grow">
        <textarea
          className="rounded-lg m-2 w-full p-5"
          value={conversation}
          readOnly
          rows={10}
          cols={40}
          style={{ resize: "none" }}
        />
      </div>

      {/* Input field and Send button */}
      <div className="flex items-center flex-grow">
        {/* Input field */}
        <Input
          className="ml-2 mr-2 flex-grow"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Prompt..."
        />
        {/* Send button */}
        <button
          type="button"
          className="p-4 rounded-full bg-gradient-to-b from-primary to-secondary"
          onClick={sendMessage}
        >
          {/* Icon for the button */}
          <Image src={"/Vector.svg"} width={18} height={18} alt="Vector" />
          {/* Screen reader text for the button */}
          <span className="sr-only">Send</span>
        </button>
      </div>
    </div>
  );
}

// Export ChatComponent as default
export default ChatComponent;
