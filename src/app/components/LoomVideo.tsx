// components/LoomVideo.tsx
import React from 'react';

interface LoomVideoProps {
  embedUrl: string;
}

const LoomVideo: React.FC<LoomVideoProps> = ({ embedUrl }) => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="fullscreen"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default LoomVideo;

