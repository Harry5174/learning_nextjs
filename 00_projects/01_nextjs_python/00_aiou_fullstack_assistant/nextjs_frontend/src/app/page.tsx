import ChatComponent from "./components/ChatComponent";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
        <div className="px-3 py-4 rounded-xl bg-white bg-opacity-50 backdrop-blur-xl w-full max-w-md">
          {/* Chat component */}
          <ChatComponent />
          {/* Bar */}
          <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6"></div>
        </div>
      </main>
    </>
  );
}
