import { useEffect } from 'react';

export const useClickOutside = ({ ref, handleClose }) => {
  useEffect(() => {
    const clickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleKey = ({ key }) => {
      if (key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', clickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [ref, handleClose]);
};
