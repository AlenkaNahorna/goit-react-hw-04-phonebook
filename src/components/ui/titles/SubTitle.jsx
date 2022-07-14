import styled from '@emotion/styled';

export const StyledSubTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: 20px;
  color: ${p => p.theme.colors.accentColor};
`;

export const SubTitle = ({ title }) => {
  return <StyledSubTitle>{title}</StyledSubTitle>;
};
