import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
    const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

    const getDimension = () => {
        setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            getDimension();
            window.addEventListener('resize', getDimension);
            return () => {
                window.removeEventListener('resize', getDimension);
            };
        }
    }, []);

    return windowDimension;
};
