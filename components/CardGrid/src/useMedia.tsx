import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

export type MediaSize = 'xs' | 'sm' | 'md' | 'lg';
export interface Media {
  media: MediaSize;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
}

const getMedia = (width: number) => {
  const initials = { xs: true, sm: true, md: true, lg: true };
  if (width > 640) {
    return { media: 'sm', ...initials, xs: false };
  }

  return { media: 'xs', ...initials };
};

const useMedia = () => {
  const { width } = useWindowSize();

  return getMedia(width) as Media;
};

export default useMedia;
