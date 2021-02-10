import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

const Item = styled.li`
    flex: inherit;
    margin-right: 20px;
`;

const SLink = styled(NavLink)`
    position: relative;
    color: #06c;
    &:hover, &.active {
        border-bottom: 1px solid #06c;
    }
    &:after {
        content: '>';
        display: inline-block;
        margin-left: 2px;
    }
`; // 상단에 Link 정의해줘야 사용 가능

export default (home) => (
    <Header>
        <List>
            <Item>
                <SLink exact to="/">홈</SLink>
            </Item>
            <Item>
                <SLink to="/newyear">신년회 발표 내용 보충 공지</SLink>
            </Item>
            <Item>
                <SLink to="/shortwork">근무시간 단축에 따른 후속 조치</SLink>
            </Item>
        </List>
    </Header>
);
