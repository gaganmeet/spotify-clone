import NextImage from 'next/image'
import Link from 'next/link'
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

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Liked Songs',
    icon: MdFavorite,
    route: '/',
  },
]

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i}`)

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
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="30px">
          <List spacing={3}>
            {navMenu.map((item) => (
              <LinkBox key={item.name}>
                <ListItem
                  display="flex"
                  alignItems="center"
                  paddingX="20px"
                  paddingY="5px"
                  borderRadius="5px"
                  _hover={{
                    bg: 'gray.700',
                  }}
                >
                  <Link href={item.route} passHref>
                    <>
                      <ListIcon as={item.icon} />
                      <LinkOverlay href={item.route}>{item.name}</LinkOverlay>
                    </>
                  </Link>
                </ListItem>
              </LinkBox>
            ))}
          </List>
        </Box>
        <Box marginBottom="10px">
          <List spacing={3}>
            {musicMenu.map((item) => (
              <LinkBox key={item.name}>
                <ListItem
                  display="flex"
                  alignItems="center"
                  paddingX="20px"
                  paddingY="5px"
                  borderRadius="5px"
                  _hover={{
                    bg: 'gray.700',
                  }}
                >
                  <Link href={item.route} passHref>
                    <>
                      <ListIcon as={item.icon} />
                      <LinkOverlay href={item.route}>{item.name}</LinkOverlay>
                    </>
                  </Link>
                </ListItem>
              </LinkBox>
            ))}
          </List>
        </Box>
        <Divider />
        <Box overflowY="auto" height="73%" paddingY="20px">
          <List spacing={3}>
            {playlists.map((item) => (
              <LinkBox key={item}>
                <ListItem
                  display="flex"
                  alignItems="center"
                  paddingX="20px"
                  paddingY="5px"
                  borderRadius="5px"
                  _hover={{
                    bg: 'gray.700',
                  }}
                >
                  <Link href="/" passHref>
                    <>
                      <ListIcon as={MdFavorite} />
                      <LinkOverlay href="/">{item}</LinkOverlay>
                    </>
                  </Link>
                </ListItem>
              </LinkBox>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
