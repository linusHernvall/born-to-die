import { useRef } from "react";

function Playthrough() {
  //CSS----------------------------------------
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="video-wrapper">
      <video ref={videoRef} autoPlay muted loop className="video-wrapper">
        <source src="/videos/hell-inside-pt.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
}

export default Playthrough;
