import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import Root from './app/root';
import Authorized from './common/components/Authorized/Authorized';
import ErrorPage from './common/components/errorPage/errorPage';
import UserProfile from './features/userProfile/userProfile';
import CreatePlaylist from './features/createPlaylist/createPlaylist';
import UserPlaylists from './features/userPlaylists/userPlaylists';
import RecommendedArtists from './features/recommendedArtists/recommendedArtists';
import SongFinder from './features/songFinder/songFinder';
import CurrentPlaylist from './features/currentPlaylist/currentPlaylist';
import routes from './routes/routes';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.authorized(),
        element: <Authorized />
      },
      {
        path: routes.user(),
        element: <UserProfile />
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
    <SkeletonTheme baseColor='#1efa2f' highlightColor='#99faa0 '>
      <RouterProvider router={router} />
    </SkeletonTheme>
  )


}


