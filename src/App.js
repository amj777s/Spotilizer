import React from 'react';
import './App.css';
import Root from './app/root';
import ErrorPage from './common/components/errorPage/errorPage';
import UserProfile from './features/userProfile/userProfile';
import Login from './features/login/login';
import CreatePlaylist from './features/createPlaylist/createPlaylist';
import UserPlaylists from './features/userPlaylists/userPlaylists';
import RecommendedArtists from './features/recommendedArtists/recommendedArtists';
import SongFinder from './features/songFinder/songFinder';
import routes from './routes/routes';
import { createBrowserRouter,
  RouterProvider } from 'react-router-dom';
import CurrentPlaylist from './features/currentPlaylist/currentPlaylist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.login(),
        element: <Login />
      },
      {
        path: routes.user(),
        element: <UserProfile/>
      },
      {
        path: routes.createPlaylist(),
        element: <CreatePlaylist />
      },
      {
        path: routes.userPlaylists(),
        element: <UserPlaylists />
      },
      {
        path: routes.currentPlaylist(),
        element: <CurrentPlaylist />
      },
      {
        path: routes.recommendedArtists(),
        element: <RecommendedArtists />
      },
      {
        path: routes.songFinder(),
        element: <SongFinder />
      }
      
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )


}


