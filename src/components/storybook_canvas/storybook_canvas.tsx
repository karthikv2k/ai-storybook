import React, { useState, useEffect } from 'react';

// Define a type for the props
interface StoryBookCanvasProps {
  generatedImageUrl: string | null;
  sceneTitle: string | null;
}

const StoryBookCanvas = ({ generatedImageUrl, sceneTitle }: StoryBookCanvasProps) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (generatedImageUrl) {
      setImageLoading(true);
      setImageError(false);
    }
  }, [generatedImageUrl]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div className="content-right" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
      <div className="content-block image" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <div className="content-block-body" style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {generatedImageUrl ? (
            <img 
              src={generatedImageUrl} 
              alt="Generated" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',
                opacity: imageLoading ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                position: 'absolute'
              }} 
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            sceneTitle && (
              <h2 style={{
                position: 'absolute',
                zIndex: 1,
                textAlign: 'center',
                width: '100%',
                padding: '20px',
                margin: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
              }}>
                {sceneTitle}
              </h2>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { StoryBookCanvas };