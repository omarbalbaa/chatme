"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Video, Users } from "lucide-react";

function JoinRoom() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");

  const generatedRoomId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  const handleCreateNewRoom = () => {
    router.push(`/room/${generatedRoomId}`);
  };

  const handleJoin = (e:React.FormEvent) => {
    e.preventDefault();
    if(username && roomId){
      router.push(`/room/${roomId}?username=${encodeURIComponent(username)}`);
    }
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <form onSubmit={handleJoin} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Users className="size-5 text-blue-400" />
            <label htmlFor="username" className="text-sm">
              {" "}
              Your name
            </label>
          </div>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 h-10 rounded-md border border-zinc-300 focus:outline-none
          focus:border-blue-500 w-full"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Video className="size-5 text-purple-400" />
            <label htmlFor="roomId" className="text-sm">
              Room ID
            </label>
          </div>
          <input
            id="roomId"
            type="number"
            value={roomId}
            onChange={(e)=>setRoomId(e.target.value)}
            placeholder="Enter room ID"
            className="px-4 h-10 rounded-md border border-zinc-300 focus:outline-none
          focus:border-blue-500 w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full h-10 rounded-md text-white font-medium
        cursor-pointer bg-gradient-to-r from-blue-500
        to-purple-600 hover:from-blue-600 hover:to-purple-700
        disabled:opacity-50"
        >
          Join Room
        </button>

        {/* <button
          type="button"
          onClick={handleCreateNewRoom}
          className="w-full h-10 rounded-md text-blue-500 font-medium
        cursor-pointer disabled:opacity-50"
        >
          or create a new room
        </button> */}
      </form>
    </div>
  );
}

export default JoinRoom;
