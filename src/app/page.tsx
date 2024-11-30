import JoinRoom from "@/components/join-room";
import React from "react";

function HomePage() {
  return (
    <main className="h-screen flex item-center justify-center bg-gradient-to-b from-neutral-100 to-white">
      <div className="flex flex-col item-center justify-center h-full px-4 gap-10">
        <div className="text-center">
          <h1 className="text-xl md:text:3xl font-semibold !leading-snug bg-gradient-to-r from-blue-500 to-purple-700
          bg-clip-text text-transparent">
            Connect with friends with ChatMe
          </h1>
          <p className="text-zinc-600 text-base max-w-md mx-auto mt-2">
            Bring your team or friends closer with effortless voice and video calls
          </p>
        </div>
        <JoinRoom />
      </div>
    </main>
  );
}

export default HomePage;
