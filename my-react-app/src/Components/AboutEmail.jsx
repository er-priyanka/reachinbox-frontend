import { Box, Flex, Stack, Text, Select, Button, useColorMode } from "@chakra-ui/react";

const user = {
    "id": 4,
    "fromName": "Shaw Adley",
    "fromEmail": "shaw@getmemeetings.com",
    "toName": "",
    "toEmail": "mitrajit2022@gmail.com",
    "cc": null,
    "bcc": null,
    "threadId": 2,
    "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    "subject": "Test mail",
    "body": "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
    "isRead": true,
    "folder": "INBOX",
    "uid": 594,
    "sentAt": "2023-11-23T04:08:45.000Z",
    "archivedAt": null,
    "createdAt": "2023-11-23T07:38:46.000Z",
    "updatedAt": "2023-11-23T07:38:46.000Z",
    "deletedAt": null
  };

export const AboutEmail = () =>{
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box textAlign="left">
            {/* Header */}
            <Flex 
            borderBottom="1px"
            borderColor={colorMode=='light'?"black" :"#33383F"}
            gap="8px"
            padding="20px"
            alignItems="center"
            justifyContent="space-between"
            // border={"1px"}
            >
                <Stack
                w="49%"
                spacing="2px"
                
                >
                    
                        <Text
                        fontFamily="Inter"
                        fontWeight="600"
                        fontSize="14px"
                        color={colorMode=="light"?"black":"white"}
                        >{user.fromName}</Text>
                        <Text
                        fontFamily="Inter"
                        color="#666666"
                        fontSize="12px"
                        >{user.fromEmail}</Text>
                    
                </Stack>
                <Flex 
                width="48%"
                gap="14px"
                alignItems="center"
                fontSize="12px"
                fontFamily="Open Sans"
                fontWeight="600"
                
                justifyContent="end"
                >
                    <Select 
                    w="fit-content"
                    borderRadius="4px"
                    padding="8px"
                    borderColor="#343A40"
                    bgColor={colorMode=="light"?"white":"#1F1F1F"}
                    fontSize="12px"
                    >
                        <option value="meeting_completed">Meeting Completed</option>
                    </Select>

                    <Select 
                    width="fit-content"
                    borderRadius="4px"
                    padding="8px"
                    borderColor="#343A40"
                    bgColor={colorMode=="light"?"white":"#1F1F1F"}
                    fontSize="12px"
                    >
                        <option value="move">Move</option>
                    </Select>

                    <Button
                    borderRadius="4px"
                    padding="8px"
                    borderColor={colorMode=="light"?"black":"#343A40"}
                    bgColor={colorMode=="light"?"white":"#1F1F1F"}
                    fontSize="12px"
                    >...</Button>
                </Flex> 
                    
                
            </Flex>

            {/* Content */}

            <Stack
            textAlign="left"
            spacing="18px"
            margin="40px 21px"
            padding="12px 16px"
            borderRadius="4px"
            border="1px"
            borderColor="#343A40"
            bgColor={colorMode=="light"?"white":"#141517"}
            >
                <Stack>
                    <Flex justifyContent="space-between">
                        <Text>{user.subject}</Text>
                        <Text>{user.sentAt}</Text>
                    </Flex>
                    
                    <Flex gap="5px">
                        <Text>from: {user.fromEmail}</Text>
                        <Text>cc: {user.cc}</Text>
                    </Flex>
                    <Text>to: {user.toEmail}</Text>
                </Stack>
                <Box dangerouslySetInnerHTML={{__html:user.body}}
                paddingLeft="1px"
                ></Box>
            </Stack>

            

        </Box>
    )
}