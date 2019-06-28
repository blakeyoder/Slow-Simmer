import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${(props) => props.postLink ? 'blue' : 'red'};
  margin-right: 15px;
`;
