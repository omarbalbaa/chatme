'use client'
import React, { useState, useEffect, useRef} from 'react';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSearchParams } from "next/navigation"

interface Props {
  roomId: string;
}

const VideoCall = ({roomId}:Props) => {

  const zegoRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "Anonymous";

  useEffect(()=>{
    const appID = parseInt(process.env.NEXT_PUBLIC_ZEGOCLOUD_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_ZEGOCLOUD_SERVER_SECRET!;

    if(!appID || !serverSecret || !containerRef.current){
      alert("Missing configuration or container");
      return;
    }

    const userID = username.toLowerCase().replace(/[^a-z0-9]/g, "") +
    Math.floor(Math.random() * 1000).toString();

    try{
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userID,
        username,
        720,
      );

      zegoRef.current = ZegoUIKitPrebuilt.create(kitToken);
      zegoRef.current.joinRoom({
        container: containerRef.current,
        scenario:{
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        shareLink: [
          {
            name: "Sharable Link",
            url: `${window.location.protocol}//${window.location.host}
            ${window.location.pathname}`
          }
        ]
      });
    } catch (error){
      alert("Error joining the room");
    }
    return () => {
      if (zegoRef.current){
        zegoRef.current.destroy();
        zegoRef.current = null;
      }
    }
  }, [roomId, username]);

  return (
    <div ref={containerRef} className='h-screen w-full' />
  )
}

export default VideoCall