import { useEffect } from 'react';

export const useClickOutside = ({ ref, handleClose }) => {
  useEffect(() => {
    const clickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [ref, handleClose]);
};
