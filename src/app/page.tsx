'use client'

// Trigger fresh deployment - ESLint fix applied
export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
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

      {/* Mobile Text - Centered and smaller */}
      <div 
        className="block md:hidden text-white text-center"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white !important',
          fontSize: '28px',
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
          zIndex: 9999,
          whiteSpace: 'nowrap'
        }}
      >
        Launching soon
      </div>

      {/* Desktop Text - 54% positioned */}
      <div 
        className="hidden md:block text-white"
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '54%',
          transform: 'translateX(-50%)',
          color: 'white !important',
          fontSize: '48px',
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
          zIndex: 9999,
          whiteSpace: 'nowrap'
        }}
      >
        Launching soon
      </div>
    </main>
  )
} 