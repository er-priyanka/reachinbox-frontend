import { Switch, Box, Text, Flex, Select, Option} from "@chakra-ui/react";

export const OneboxNavbar = () =>{
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
                    
                    <Switch />
                    <Select>
                        <option value="tims_workspace">Tim's Workspace</option>
                    </Select>
                </Flex>
            </Flex>
        </Box>
    )
}