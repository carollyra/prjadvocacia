import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #fff8f0;
`;

export const Hero = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #4b5563;
  }
`;

export const CTAButton = styled.a`
  background-color: #ff6b00;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #e55a00;
  }
`;
