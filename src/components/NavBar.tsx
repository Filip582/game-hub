import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/GameHub Resources/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default NavBar
