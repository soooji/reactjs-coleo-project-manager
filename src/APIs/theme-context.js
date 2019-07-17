import React from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: '#F6F9FD',
    },
    dark: {
      foreground: '#ffffff',
      background: '#252439',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );