'use client'

// Trigger fresh deployment - ESLint fix applied
export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
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
      >
        <source src="/launching.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Mobile Text - Centered */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-16 md:hidden">
        <h1 
          className="text-white font-bold text-center px-4"
          style={{
            fontSize: 'clamp(32px, 8vw, 44px)',
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)'
          }}
        >
          Launching soon
        </h1>
      </div>

      {/* Desktop Text - 54% Positioned */}
      <div 
        className="hidden md:block absolute"
        style={{
          bottom: '50px',
          left: '54%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '48px',
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0,0,0,0.9)'
        }}
      >
        Launching soon
      </div>
    </main>
  )
} 