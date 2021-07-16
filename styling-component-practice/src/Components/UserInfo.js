import React from 'react'
import styled from 'styled-components';


const UserInfoMain = styled.div`
    background:green;
`;

export default function UserInfo() {
    return (
        <UserInfoMain>
            <p>new comment</p>
        </UserInfoMain>
    )
}
