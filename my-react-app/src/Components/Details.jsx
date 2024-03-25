import { Stack, Flex, Text, Heading, Image, Box, useColorMode } from "@chakra-ui/react";
import { LuMailOpen } from "react-icons/lu";
import emailImg from "../Images/email.png";
import sendImg from "../Images/send.png";

const user = {
    "Name": "Orlando",
    "Contact No": "+91-9075746574",
    "Email Id": "orlando@gmail.com",
    "LinkedIn": "linkedin.com/in/timvadde",
    "Company Name": "Reachinbox"
}

const headingStyle = {
    borderRadius: "8px",
    padding: "8px 12px",
    color: "white",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "14px"
}
const styleProps = {
    justifyContent:"space-between"
}
const stackProps = {
    alignItems:"left"
}

const textStyleProps = {
    fontFamily:"Open Sans",
    fontWeight:"600",
    fontSize:"13px",
        
}
const boxStyleProps = {
    w:"32px",
    h:"32px",
    borderRadius:"50%",
    border:"1px solid #41464B",
    bgColor:"#23272C",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}
 
export const Details = () =>{
    const {colorMode, toggleColormode} = useColorMode();

    return (
        <Stack 
        w="20%"
        bgColor={colorMode=="light"?"white":"black"}
        borderLeft="1px"
        borderColor={colorMode=="light"?"black":"#353533"}
        textAlign="left"
        padding="16px 5px"
        >
            <Heading {...headingStyle}
            bgColor={colorMode=='light' ? "gray" :"#23272C"}

            >
                Lead Details
            </Heading>

            <Stack 
            padding="8px 12px 16px 12px"
            >
                
                <Flex {...styleProps}>
                    <Text>Name</Text>
                    <Text>{user.Name}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text>Contact No</Text>
                    <Text>{user["Contact No"]}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text>Email ID</Text>
                    <Text>{user["Email Id"]}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text>Linkedin</Text>
                    <Text>{user.LinkedIn}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text>Company Name</Text>
                    <Text>{user["Company Name"]}</Text>
                </Flex>
            </Stack>


            <Heading {...headingStyle}
            bgColor={colorMode=='light' ? "gray" :"#23272C"}
            >Activities</Heading>
            <Stack
            padding="8px 20px" 
            fontFamily="Open Sans"
            fontWeight="600"
            spacing="20px"
            >
                <Text
                fontSize="15px"
                color={colorMode=='light'? "black":"white"}
                >
                    Compaign Name
                </Text>
                <Flex
                fontSize="12px"
                gap="10px"
                >
                    <Text 
                    borderRight="1px"
                    paddingRight="10px"
                    ><span fontWeight="400">3</span> Steps</Text>
                    <Text><span fontWeight="400">5</span> Days in Sequence</Text>
                </Flex>

                <Stack 
                textAlign="left" 
                w="100%"
                spacing="32px"
                >
                    <Flex
                    gap="16px" 
                    >
                        <Box
                        {...boxStyleProps}
                        >
                            <Image src={emailImg} />
                        </Box>
                        
                        <Stack
                        {...stackProps}
                        >
                            <Text
                            {...textStyleProps}
                            color={colorMode=='light'?"black":"white"}
                            >Step 1: Email</Text>
                            <Flex 
                            alignItems="center"
                            gap="2px"
                            >
                                <Image src={sendImg} />
                                
                                <Text
                                fontFamily="Inter"
                                fontWeight="400"
                                fontSize="10px"
                                color={colorMode=='light'?"gray.700":"#B9B9B9"}
                                >Sent <span>3rd, Feb</span></Text>
                            </Flex>
                        </Stack>
                    </Flex>

                    <Flex
                    gap="16px" 
                    >
                        <Box {...boxStyleProps}>
                            <Image src={emailImg} />
                        </Box>

                        <Stack {...stackProps}
                        >
                            <Text {...textStyleProps}
                            color={colorMode=='light'?"black":"white"}

                            >Step 2: Email</Text>
                            <Flex 
                            alignItems="center"
                            gap="8px">
                                <LuMailOpen color="#ECBF21" />
                                <Text
                                 fontFamily="Inter"
                                 fontWeight="400"
                                 fontSize="10px"
                                color={colorMode=='light'? "gray.700": "#B9B9B9"}
                                >Opened <span>5th, Feb</span></Text>
                            </Flex>
                        </Stack>
                    </Flex>

                    <Flex
                    gap="16px" 
                    >
                        <Box {...boxStyleProps}>
                            <Image src={emailImg} />
                        </Box>
                            
                        <Stack {...stackProps}>
                            <Text  {...textStyleProps}
                            color={colorMode=='light'?"black":"white"}

                            >Step 3: Email</Text>
                            <Flex
                            alignItems="center"
                            gap="8px" 
                            >
                                <LuMailOpen color="#ECBF21" />
                                <Text
                                 fontFamily="Inter"
                                 fontWeight="400"
                                 fontSize="10px"
                                 color={colorMode=='light'? "gray.700": "#B9B9B9"}
                                >Opened <span>5th, Feb</span></Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Stack>

            </Stack>
            
        </Stack>
    )
}