import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from '../Components/Sidebar';

const Onebox = ()=> {
  return (
    <Box>
      <Flex>
        {/* sidebar  */}
        <Sidebar />
        <Box>
            
        </Box>
      </Flex>
    </Box>
  )
}

export default Onebox;