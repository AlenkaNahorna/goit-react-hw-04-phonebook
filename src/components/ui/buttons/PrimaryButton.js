import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  padding: ${p => p.theme.space.ml};
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-radius: ${p => p.theme.radii.small};

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
