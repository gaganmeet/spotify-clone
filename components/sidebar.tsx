import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'

function Sidebar() {
  return (
    <Box
      width="100%"
      bg="black"
      paddingX="5px"
      color="gray"
      sx={{
        height: 'calc(100vh - 100px)',
      }}
    >
      Sidebar
    </Box>
  )
}

export default Sidebar
