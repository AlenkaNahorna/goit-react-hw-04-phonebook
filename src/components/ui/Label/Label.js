import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space.l};
`;
