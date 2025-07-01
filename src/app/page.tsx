'use client'

export default function Home() {
  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Base responsive container */
        .video-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background-color: #000000;
          overflow: hidden;
          padding: clamp(1rem, 4vw, 2rem);
        }

        /* Responsive video background */
        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          max-width: none;
          width: auto;
          height: auto;
          z-index: 1;
          object-fit: cover;
        }

        /* Dark overlay for text readability */
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.25);
          z-index: 2;
        }

        /* Responsive text container */
        .text-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 90vw;
          text-align: center;
          padding-bottom: clamp(1rem, 3vh, 2rem);
        }

        /* Base text styling */
        .launching-text {
          color: #ffffff;
          font-weight: bold;
          text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8);
          white-space: nowrap;
          font-size: clamp(1.5rem, 5vw, 3rem);
          line-height: 1.2;
        }

        /* Desktop specific positioning (54% alignment) */
        @media (min-width: 768px) {
          .text-container {
            position: absolute;
            bottom: clamp(2rem, 5vh, 4rem);
            left: 54%;
            transform: translateX(-50%);
            text-align: left;
            max-width: none;
            width: auto;
            padding-bottom: 0;
          }
          
          .launching-text {
            font-size: clamp(2.5rem, 4vw, 3rem);
          }
        }

        /* Tablet adjustments */
        @media (min-width: 600px) and (max-width: 767px) {
          .launching-text {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
          
          .text-container {
            padding-bottom: clamp(1.5rem, 4vh, 2.5rem);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 599px) {
          .video-container {
            padding: clamp(0.75rem, 3vw, 1.5rem);
          }
          
          .launching-text {
            font-size: clamp(1.25rem, 6vw, 1.75rem);
            white-space: normal;
            word-break: break-word;
          }
          
          .text-container {
            padding-bottom: clamp(0.75rem, 2vh, 1.5rem);
            max-width: 95vw;
          }
          
          /* Ensure video doesn't get too small on mobile */
          .background-video {
            min-width: 100%;
            min-height: 100%;
          }
        }

        /* Extra small screens */
        @media (max-width: 320px) {
          .launching-text {
            font-size: clamp(1rem, 5vw, 1.25rem);
          }
          
          .video-container {
            padding: 0.5rem;
          }
        }

        /* Landscape mobile adjustments */
        @media (max-width: 768px) and (orientation: landscape) {
          .text-container {
            padding-bottom: clamp(0.5rem, 2vh, 1rem);
          }
          
          .launching-text {
            font-size: clamp(1rem, 4vw, 1.5rem);
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="video-container">
        {/* Background Video */}
        <video
          className="background-video"
          src="/launching.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />

        {/* Video Overlay */}
        <div className="video-overlay" />

        {/* Text Content */}
        <div className="text-container">
          <h1 className="launching-text">
            Launching soon
          </h1>
        </div>
      </div>
    </>
  )
} 