import styled from 'styled-components'
import React from 'react';
const LargeCardComponent = styled.div`
    box-shadow: 0 22px 34px 0 rgba(0,0,0,0.02);
    border-radius: 12px;
    padding: 18px;
    margin-top:20px;
`;

export function LargeCard(props) {
  return (
    <LargeCardComponent className="card-style">
        <div className="card-head-bar">
            <div className="card-head-title-box">
                {props.title}
            </div>
            <div className="card-head-actions">
                {props.actions}
            </div>
        </div>
        {props.children}
    </LargeCardComponent>
  );
}