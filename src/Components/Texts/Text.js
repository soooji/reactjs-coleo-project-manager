import React from 'react';
export function HeadTitle(props) {
  return (
    <div className={`text-head-title ${props.className}`}>
        {props.text}
    </div>
  );
}