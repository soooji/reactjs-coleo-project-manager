import React from 'react';
import styled from 'styled-components';
const UserImg = styled.img`
    border-radius: 20px;
    width: ${props => props.size};
    height: ${props => props.size};
`
function UserInfoSmall(props) {
  return (
    <div className={`user-info ${props.className}`} style={props.style}>
      <UserImg src={props.avatarUrl} size="22px"/>
        <div style={{marginLeft:7}}>
            <div className="user-name--size-small">
                {props.userFullName}
            </div>
        </div>
    </div>
  );
}

export default UserInfoSmall;
