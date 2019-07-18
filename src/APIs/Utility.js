import {useEffect} from 'react';
import humanizeDuration from 'humanize-duration'

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

export const shortEnglishHumanizer = humanizeDuration.humanizer({
  round: true,
  largest: 2,
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'h',
      m: () => 'm',
      s: () => 's',
      ms: () => 'ms',
    }
  }
})