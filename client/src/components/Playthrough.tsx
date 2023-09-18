import { useRef } from 'react';

function Playthrough() {
  //CSS----------------------------------------
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="video-wrapper">
      <div className="overlay"></div>
      <video ref={videoRef} autoPlay muted loop className="video-wrapper">
        <source src="/videos/hell-inside-pt.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Playthrough;
