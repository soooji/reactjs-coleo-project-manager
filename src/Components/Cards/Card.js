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
    <LargeCardComponent className={`card-style ${props.className}`}>
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
export function Large3PartCard(props) {
    return (
      <LargeCardComponent className={`card-style ${props.className}`}>
          <div className="card-head-bar">
              <div className="card-head-title-box" style={{width:'25%'}}>
                  {props.left}
              </div>
              <div className="card-head-center" style={{width:'50%'}}>
                  {props.center}
              </div>
              <div className="card-head-actions"style={{width:'25%'}}>
                  {props.right}
              </div>
          </div>
          {props.children}
      </LargeCardComponent>
    );
  }