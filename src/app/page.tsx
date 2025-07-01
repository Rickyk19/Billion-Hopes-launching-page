'use client'

// Trigger fresh deployment - ESLint fix applied
export default function Home() {
  return (
    <main 
      className="min-h-screen bg-black relative overflow-hidden w-full"
      style={{ 
        height: '100vh', 
        overflow: 'hidden'
      }}
    >
      {/* Video Background - Desktop Only */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
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

      {/* Mobile Background - Gradient */}
      <div 
        className="absolute inset-0 w-full h-full md:hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 50%, #1e1e1e 100%)'
        }}
      ></div>

      {/* Mobile Logo Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center md:hidden px-6">
        <div className="text-center">
          {/* Brain Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 2C8.4 2 7.5 2.9 7.5 4v1c0 .6-.4 1-1 1s-1-.4-1-1c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.1.9 2 2 2 .6 0 1 .4 1 1v6c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V8c0-.6.4-1 1-1 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .6-.4 1-1 1s-1-.4-1-1V4c0-1.1-.9-2-2-2z"/>
              <circle cx="9" cy="8" r="1"/>
              <circle cx="15" cy="8" r="1"/>
              <circle cx="12" cy="11" r="1"/>
              <circle cx="9" cy="14" r="1"/>
              <circle cx="15" cy="14" r="1"/>
            </svg>
          </div>
          <div className="text-white text-3xl font-bold mb-3 tracking-wide">BILLION HOPES</div>
          <div className="text-gray-300 text-lg mb-16">AI FOR REAL IMPACT</div>
        </div>
      </div>

      {/* MOBILE TEXT - BOTTOM CENTERED */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 md:hidden px-4">
        <div 
          className="text-white font-bold text-center"
          style={{
            fontSize: 'clamp(32px, 10vw, 44px)',
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            whiteSpace: 'nowrap'
          }}
        >
          Launching soon
        </div>
      </div>

      {/* DESKTOP TEXT - 54% POSITIONED */}
      <div 
        className="hidden md:block absolute"
        style={{
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