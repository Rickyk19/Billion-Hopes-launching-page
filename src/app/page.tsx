'use client'

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        .desktop-only {
          display: none;
        }
        .mobile-only {
          display: block;
        }
        @media (min-width: 768px) {
          .desktop-only {
            display: block;
          }
          .mobile-only {
            display: none;
          }
        }
      `}</style>
      
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        overflow: 'hidden'
      }}>
        {/* Desktop Video - FULL SCREEN NO SPACES */}
        <video
          className="desktop-only"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/launching.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video - FIT TO SCREEN */}
        <video
          className="mobile-only"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/launching.mp4" type="video/mp4" />
        </video>

        {/* Mobile Text */}
        <div 
          className="mobile-only"
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            zIndex: 9999
          }}
        >
          Launching soon
        </div>

        {/* Desktop Text - 54% POSITIONED AS REQUESTED */}
        <div 
          className="desktop-only"
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '54%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            zIndex: 9999
          }}
        >
          Launching soon
        </div>
      </div>
    </>
  )
} 