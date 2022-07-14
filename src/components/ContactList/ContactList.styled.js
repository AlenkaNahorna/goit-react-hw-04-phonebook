import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactsListItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space.m};
  margin-bottom: ${p => p.theme.space.ml};
`;

export const ContactsListText = styled.p`
  margin: 0 ${p => p.theme.space.l};
`;
