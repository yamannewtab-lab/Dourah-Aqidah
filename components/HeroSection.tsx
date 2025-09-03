import React, { useRef, useEffect } from 'react';

// TypeScript declaration for the ColorThief library loaded from CDN
declare const ColorThief: any;

interface HeroSectionProps {
  scrollY: number;
  onPaletteExtracted: (palette: number[][]) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY, onPaletteExtracted }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleImageLoad = () => {
      try {
        if (typeof ColorThief !== 'undefined') {
          const colorThief = new ColorThief();
          const palette = colorThief.getPalette(img, 5);
          onPaletteExtracted(palette);
        }
      } catch (error) {
        console.error('Error extracting color palette:', error);
      }
    };

    const handleError = () => {
      console.error("Hero image failed to load.");
    };

    // An image can be 'complete' even if it failed to load (e.g. 404).
    // `naturalWidth > 0` is a robust way to check if it's a valid, loaded image.
    if (img.complete && img.naturalWidth > 0) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
      img.addEventListener('error', handleError);
    }

    // Cleanup the event listeners
    return () => {
      if (img) {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleError);
      }
    };
  }, [onPaletteExtracted]);


  // The effect will be most prominent in the first 600px of scrolling
  const scrollEffectLimit = 600;
  const scrollRatio = Math.min(scrollY / scrollEffectLimit, 1);

  // Image fades out as you scroll down
  const imageOpacity = Math.max(0, 1 - scrollRatio * 1.5);
  // Text fades out faster and moves up for a parallax effect
  const textOpacity = Math.max(0, 1 - scrollRatio * 2);
  const textTranslateY = -scrollY * 0.4;

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
      <img
        ref={imgRef}
        src={'https://i.imgur.com/T6KvPZ3.png'}
        alt="خلفية رئيسية"
        className="absolute top-0 left-0 w-full h-full object-cover"
        crossOrigin="anonymous"
        style={{ opacity: imageOpacity }}
      />
      <div
        className="z-10 text-center text-white p-4"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{ textShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}>
          نص ديناميكي متحرك
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto"
           style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
          جرب الويب المتحرك. قم بالتمرير لأسفل لترى السحر.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;