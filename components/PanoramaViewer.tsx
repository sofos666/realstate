import React, { useEffect } from 'react';

// Inform TypeScript that pannellum can be found on the window object.
declare global {
  interface Window {
    pannellum: any;
  }
}

interface PanoramaViewerProps {
  src: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ src }) => {
  const panoramaId = 'panorama-container';

  useEffect(() => {
    if (window.pannellum) {
      window.pannellum.viewer(panoramaId, {
        type: 'equirectangular',
        panorama: src,
        autoLoad: true,
        autoRotate: -2,
        showControls: true,
        compass: true,
        northOffset: 240,
      });
    }
    // Cleanup function to destroy the viewer instance when the component unmounts
    return () => {
        const viewerElement = document.getElementById(panoramaId);
        if (viewerElement && viewerElement.classList.contains('pnlm-container')) {
             // A bit of a hack as pannellum doesn't have a clean destroy API exposed on all versions
            viewerElement.innerHTML = '';
        }
    };
  }, [src]);

  return (
    <div id={panoramaId} style={{ width: '100%', height: '500px' }} className="rounded-lg shadow-lg"></div>
  );
};

export default PanoramaViewer;
