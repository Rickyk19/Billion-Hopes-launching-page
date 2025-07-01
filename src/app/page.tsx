'use client'

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-black relative overflow-hidden" 
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          style={{ 
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none'
          }}
        >
          <source src="/launching.mp4" type="video/mp4" />
          Your browser cannot support the video tag.
        </video>
      </div>

      {/* CLEAN WHITE TEXT AT BOTTOM CENTER - ALIGNED WITH LOGO CENTER */}
      <div 
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '54%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          color: 'white',
          fontSize: '48px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        Launching soon
      </div>
    </main>
  )
} 