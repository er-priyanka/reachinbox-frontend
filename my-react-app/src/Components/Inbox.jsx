import { Box, Flex, Stack, Select, Text, Input, InputGroup, InputLeftElement, Button, useColorMode } from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";


export const getDate = (data)=>{
    let date = new Date(data);
    let temp = date.toDateString().split(' ');
    return `${temp[1]} ${temp[2]}`;
}

export const Inbox = ({emails}) =>{
    const { colorMode, toggleColorMode } = useColorMode();
    // const [emails, setEmails] = useState(data);

    getDate("2023-11-23T04:08:45.000Z");
    
    return (
        <Box
        w="20%"
        borderLeft="1px"
        borderRight="1px"
        borderColor="#33383F"
        height="100vh" 
        bgColor={colorMode=="light" ? "white" :"black"}
        textAlign="center"
        padding="12px"
        >
            {/* top section */}
            <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            padding="7px"
            textAlign="left"
            
            >
                <Stack 
                padding="2px 7px"
                >
                    <Select 
                    border="none"
                    variant="unstyled"
                    >
                        <option value="all_inbox">All Inbox(s)</option>
                    </Select>
                    <Text 
                    color="#7F7F7F"
                    fontFamily="Open Sans"
                    fontWeight="400"
                    >
                        <span
                        style={{color:(colorMode=="light")?"black":"white", 
                        fontWeight:"700"}} 
                        
                        >25/25</span> Inboxes selected
                    </Text>
                </Stack>

                <Box
                w="32px"
                h="32px"
                borderRadius="4px"
                padding="8px" 
                bgColor={colorMode=="light" ? "white":"#25262B"}
                // color={colorMode=="light" ? "white": "gray"}
                >
                    <MdRefresh />
                </Box>
            </Flex>

            {/* mid section */}
            <Stack>
                <Box padding="4px 6px">
                    <InputGroup
                    borderRadius="4px"
                    >
                        <InputLeftElement pointerEvents='none'>
                        <CiSearch  color='gray' /> 
                        </InputLeftElement>
                        <Input 
                        backgroundColor={colorMode=="light" ? "white":"#23272C"} 
                        type='text' 
                        placeholder='Search' />
                    </InputGroup>
                </Box>
                
                <Flex
                padding="3px 8px"
                justifyContent="space-between"
                alignItems="center"
                fontFamily="Inter"
                fontWeight="600"
                >
                    <Flex 
                    w="50%"
                    alignItems="center"
                    gap="10px"
                    
                    >
                        <Text
                        padding="3px 8px"
                        bgColor={colorMode=="light" ? "white":"#222426"}
                        borderRadius="17px" 
                        color="#5C7CFA"
                        >26</Text>
                        <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        color={colorMode=="light" ? "black":"#E6E6E6"}
                        >New Replies</Text>
                    </Flex>
                    
                    <Select 
                    w="40%"
                    variant="unstyled"
                    >
                        <option value="newest">Newest</option>
                    </Select>
                </Flex>

                {/* Bottom section */}
                <Box 
                borderTop="1px"
                borderColor="#33383F"
                // padding="0px 9px"
                >
                    {
                        // add all inboxes here
                        emails && emails.map((item, i) => (
                            <Box
                            // borderTop="1px"
                            borderBottom="1px"
                            borderColor="#33383F"
                            key={i}
                            display="flex"
                            flexDirection="column"
                            gap="8px"
                            padding="12px 8px"
                            >   
                                <Stack
                                textAlign="left"
                                spacing="2px"
                                >
                                    <Flex
                                    justifyContent="space-between"
                                    fontFamily="Inter"
                                    >
                                        <Text 
                                        color={colorMode=="light" ? "black":"white"}
                                        fontSize="14px"
                                        fontWeight="500">{item.fromEmail}</Text>
                                        <Text
                                        fontFamily="Inter"
                                        fontWeight="400"
                                        fontSize="12px"
                                        color="gray"
                                        >{getDate(item.sentAt)}</Text>
                                    </Flex>
                                    <Text
                                    w="60%"
                                    fontWeight="400"
                                    fontSize="12px"
                                    color={colorMode=="light" ? "black":"#E1E0E0"} 
                                    noOfLines={1}>{item.subject}</Text>  
                                </Stack>
                                
                                <Flex
                                gap="8px">
                                    <Button 
                                    height="20px"
                                    padding="3px 8px"
                                    borderRadius="17px"
                                    fontFamily="Open Sans"
                                    fontWeight="600"
                                    color="#57E0A6"
                                    bgColor="#222426"
                                    fontSize="10px"
                                    >
                                        Interested
                                    </Button>
                                    <Button
                                    height="20px"
                                    padding="3px 8px"
                                    borderRadius="17px"
                                    fontSize="10px"
                                    fontFamily="Open Sans"
                                    fontWeight="600"
                                    color="#FFFFFF"
                                    bgColor="#222426"
                                    
                                    >
                                        Campaign Name
                                    </Button>
                                </Flex>
                            </Box>
                        ))
                    }
                </Box>
            </Stack>
        </Box>
    )
}