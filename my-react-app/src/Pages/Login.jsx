import React from 'react';
import { Box, Image, Stack, Text, Button, Link, Center, useColorMode } from "@chakra-ui/react";
// import axios from "axios";
// import { authContext } from '../Context/AuthContext';
import logoImg from "../Images/logo.png";
import { FcGoogle } from "react-icons/fc";

// const signupUser = async() =>{
//   const res = await axios.get("https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com");
//   console.log(res);
//   return res;
// }


export const Login = () => {
  // const {isAuth, setIsAuth} = useContext(authContext);
  const {colorMode, toggleColorMode} = useColorMode();

  
  return (
    <Box  
    fontFamily={"Open Sans"}
    bgColor="black"
    >
       
      <Center 
        p="10px 100px"
        w={"100%"}
        h={"64px"}
        borderBottom={"1px"}
        borderColor={"#25262B"}
        pos={"fixed"}
        top={0}
      >
          <Box>
            <Image src={logoImg} alt="ReachInBox logo" />
          </Box>
          
      </Center>
       

      <Center h="100vh">
        <Stack 
        w={"25%"} 
        m={"auto"}
        p={"14px 40px 40px 40px"}
        spacing={"48px"}
        border="1px"
        borderRadius={"17px"}
        borderColor={"#343A40"}
       
        >
          <Stack spacing={"24px"}>
            <Text size={"20px"}>Create a new account</Text>
            
            <Button 
            border={"1px solid #707172"}
            display={"Flex"}
            gap={"10px"}
            p="8px 16px"
            borderRadius={"4px"}
            ><FcGoogle /> 
            <Link 
            href='https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://localhost:3000/onebox'
            >
              Sign Up with Google
            </Link>
            </Button>
          </Stack>

          <Stack
          spacing={"24px"}
          >
            <Button 
            bgGradient="linear(to-r, #4B63DD, #0524BF)"
            borderRadius="4px"
            padding="13px 35px"
            fontSize={"14px"}
            _hover={{
              backgroundColor:"#0524BF"
            } 
            }
            >Create an Account</Button>
              <Text 
              fontSize={"14px"}
              color={"#909296"}
              fontFamily={"Open Sans"}
              fontWeight={"400"}
              >
                Already have an account? <Link color={"white"} href='/signin'>Sign In</Link>
              </Text>
          </Stack>
        </Stack>
      </Center>
      
    </Box>
    
  )
}

