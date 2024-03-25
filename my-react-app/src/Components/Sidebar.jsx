import {Box, Center, Image, Text, Flex, Stack, List, ListItem, Icon } from "@chakra-ui/react";
import { MdHome, MdPersonSearch, MdMail, MdViewList, MdBarChart } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import logo1 from "../Images/Logo_1.png";


const listItems = [
    MdHome,
    MdPersonSearch,
    MdMail,
    IoIosSend,
    MdViewList,
    FaInbox,
    MdBarChart,
]
export const Sidebar = () =>{
    return (
        <Flex 
        width="4%"
        height="100vh" 
        direction="column"
        borderRight="1px"
        borderColor="#343A40"
        padding="0px 4px"
        
        >
          <Box 
          w="48px"
          h="90px"
          borderRadius="2px"
          // padding="8px 12px 12px 12px"
          >
            <Box
            w="48px"
            h="70px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
              <Image 
              w="26px"
              h="24px"
              borderRadius="2px"
               src={logo1} />
            </Box>
          </Box>

          <Box
          w="48px"
          h="85vh"
          >
            <Flex
            w="48px"
            h="85vh"
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="32px"
            boxSize="borderBox"
            padding="16px 8px"
            >   
              {
                listItems.map((item, i) => (
                  <Box>
                      <Icon w="28px" h="28px" as={item}/>
                  </Box>    
                  
                     
                ))
              }
                
            </Flex>
          </Box>

          <Box
          w="48px"
          padding="12px 8px"
          >
            <Box 
            width="32px"
            height="32px"
            borderRadius="50%"
            bgColor="#054F31"
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
              <Text>PS</Text>
            </Box>
            
          </Box>
          
        </Flex>
    )
}