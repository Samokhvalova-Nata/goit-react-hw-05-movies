import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 700;

  &.active {
    color: var(--accent-color);
  }
  transition: transform var(--transition);
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`;