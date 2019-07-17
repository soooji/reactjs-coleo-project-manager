import {useEffect} from 'react';
export function useOutsideClick(ref,funcToCall) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        funcToCall();
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
}
