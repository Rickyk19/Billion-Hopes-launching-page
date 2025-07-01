'use client'

export default function Home() {
  return (
    <div style={{ 
      position: 'relative',
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#000000'
    }}>
      {/* Background Video - Responsive */}
      <video
        src="/launching.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: 1
        }}
      />

      {/* Dark overlay for better text visibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 2
      }} />

      {/* Mobile Text - Bottom Center */}
      <div 
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: '#ffffff',
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          display: 'block'
        }}
        className="block md:hidden"
      >
        Launching soon
      </div>

      {/* Desktop Text - 54% Position */}
      <div 
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '54%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: '#ffffff',
          fontSize: '48px',
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          whiteSpace: 'nowrap'
        }}
        className="hidden md:block"
      >
        Launching soon
      </div>

      {/* Global styles */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
} 