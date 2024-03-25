import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from '../Components/Sidebar';
import { OneboxNavbar } from '../Components/OneboxNavbar';
import { Content } from '../Components/Content';

const Onebox = ()=> {
  return (
    <Box>
      <Flex>
        {/* sidebar  */}
        <Sidebar />
        <Box w="96%">
            <OneboxNavbar />
            <Content />
        </Box>
      </Flex>
    </Box>
  )
}

export default Onebox;