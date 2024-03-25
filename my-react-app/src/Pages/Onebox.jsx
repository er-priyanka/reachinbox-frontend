import React, {useState, useEffect} from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from '../Components/Sidebar';
import { OneboxNavbar } from '../Components/OneboxNavbar';
import { Content } from '../Components/Content';
import { useLocation } from "react-router-dom";
import axios from "axios";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2hhaGFuZXByaXlhbmthczAxQGdtYWlsLmNvbSIsImlkIjo5LCJmaXJzdE5hbWUiOiJQcml5YW5rYSIsImxhc3ROYW1lIjoiU2hhaGFuZSJ9LCJpYXQiOjE3MTEzODYwMzUsImV4cCI6MTc0MjkyMjAzNX0.aawIHorCsYmq5bCQViAo7oEmEvwBHl_LhBq-Hh3sYGc`

export const Onebox = ()=> {
  const [data, setData] = useState(null);
  // const location = useLocation();
  // const token = new URLSearchParams(location.search).get('token');

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if(token){
      fetchData();
    }

  },[token]);

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

