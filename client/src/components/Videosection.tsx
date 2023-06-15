function Videosection() {
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        src="../../images/background.jpg"
        alt="Band playing live"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );

  // FETCH FROM DB LATER

  // const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     // Auto-play the video
  //     videoRef.current.play().catch((error: any) => {
  //       console.log("Autoplay was prevented:", error);
  //     });
  //   }
  // }, []);

  // return (
  //   <div
  //     style={{
  //       position: "fixed",
  //       top: 0,
  //       left: 0,
  //       width: "100%",
  //       height: "100vh",
  //       zIndex: -1,
  //       overflow: "hidden",
  //     }}
  //   >
  //     <video
  //       ref={videoRef}
  //       autoPlay
  //       muted
  //       loop
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //         objectFit: "cover",
  //       }}
  //     >
  //       <source src="../../videos/the-strong-ones.mp4" type="video/mp4" />
  //     </video>
  //   </div>
  // );
}

export default Videosection;
