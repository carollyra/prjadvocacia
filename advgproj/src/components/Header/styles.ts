// src/components/Header/styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b00;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #ff6b00;
  }
`;
