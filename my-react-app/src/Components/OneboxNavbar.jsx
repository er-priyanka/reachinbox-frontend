import { Switch, Box, Text, Flex, Select, useColorMode} from "@chakra-ui/react";

export const OneboxNavbar = () =>{
    const { colorMode, toggleColorMode } = useColorMode();
    // console.log(colorMode)
    return (
        <Box w="100%">
            <Flex 
            w="100%"
            border="1px"
            borderLeft="0px"
            borderColor="#343A40"
            justifyContent="space-between"
            alignItems="center"
            padding="24px"
            >
                <Text>Onebox</Text>
                <Flex
                alignItems="center"
                gap="22px"
                >
                    
                    <Switch onChange={toggleColorMode} />
                    <Select>
                        <option value="tims_workspace">Tim's Workspace</option>
                    </Select>
                </Flex>
            </Flex>
        </Box>
    )
}