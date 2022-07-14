import styled from '@emotion/styled';

export const SecondaryButton = styled.button`
  padding: ${p => p.theme.space.s};
  font-size: ${p => p.theme.fontSizes.s};
  border: none;
  border-radius: ${p => p.theme.radii.small};

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
