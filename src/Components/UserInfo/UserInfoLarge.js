import React from 'react';
import styled from 'styled-components';
const UserImg = styled.img`
    box-shadow: 0 22px 24px 0 rgba(0,0,0,0.05);
    border-radius: 12px;
    width: ${props => props.size};
    height: ${props => props.size};
`
function UserInfoLarge(props) {
  return (
    <div className="user-info" style={props.style}>
      <UserImg src={props.avatarUrl} size="45px"/>
        <div style={{marginLeft:12}}>
            <div className="user-name--size-big">
                Sajad Beheshti
            </div>
            <div className="user-role">
                Lead Designer
            </div>
        </div>
    </div>
  );
}

export default UserInfoLarge;
