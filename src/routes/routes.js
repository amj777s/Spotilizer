import UserPlaylists from "../features/userPlaylists/userPlaylists"

const routes = {
    login: () => '/login',
    home: () => '/',
    user: () => '/user',
    createPlaylist: () => '/createPlaylist',
    userPlaylists: () => '/playlists',
    currentPlaylist: () => '/playlists/:playlist',
    recommendedArtists: () => '/:artists/recommendedArtists',
    songFinder: () => '/songFinder'

}

export default routes