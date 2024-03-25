import './App.css';
import {Login} from './Pages/Login';
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Onebox from './Pages/Onebox';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();


 
  return (
    <div className="App">
     {/* <Box p="10px 40px" border="1px" textAlign={"right"} >
        <Button 
        border={"1px"}
        onClick={toggleColorMode}
        >Toggle {colorMode == 'light' ? 'Dark' : 'Light'} </Button>

      </Box> */}
      <Onebox />
    </div>
  );
}

export default App;
