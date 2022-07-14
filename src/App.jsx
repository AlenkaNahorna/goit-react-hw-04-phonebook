import React from 'react';
import { Box } from 'styles/Box';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="ml"
      m="0px auto"
      backgroundColor="secondaryColorBlue"
      width="100%"
      height="100%"
    >
      goit-react-hw-03-phonebook
      <div>please wait it is loading</div>
    </Box>
  );
};
