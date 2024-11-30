import VideoCall from "../../../components/video-call"

interface Props {
  params: Promise <{
    roomId: string;
  }>
}
const RoomPage = async ({params}:Props) => {
  const {roomId} = await params;

  if (!roomId) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className="text-2xl font-semibold">
            Room ID is required!
          </h1>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <VideoCall roomId = {roomId} />
      roomId: {roomId}
    </div>
  )
}

export default RoomPage