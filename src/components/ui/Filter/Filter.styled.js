import styled from '@emotion/styled';

export const FilterInput = styled.input`
  margin-bottom: ${p => p.theme.space.l};
  padding: ${p => p.theme.space.m};
  border-radius: ${p => p.theme.radii.small};
  height: 30px;
  width: 300px;
  color: ${p => p.theme.colors.primaryColor};
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${p => p.theme.colors.accentColor};
  }
`;
