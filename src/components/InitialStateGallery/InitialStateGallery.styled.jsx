import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  place-content: center;

  margin: 1vh auto;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;
