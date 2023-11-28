// import logo from './logo.svg';
import './App.css';
import DetailSong from './Components/DetailSong';
import ListSongs from './Components/ListSongs';
import NavBar from './Components/NavBar';
import MyContextProvider from './Context';
// import { useContext } from 'react';
// import { MyContext } from './Context';
import Playing from './Components/Playing';
// import { useState } from 'react';

export default function App() {
  // const {idPlaying} = useContext(MyContext)
  return (
    <MyContextProvider>
        <div className="App">
          <NavBar/>

          <div className='grid grid-cols-3 bg-gray-900 h-screen-navbar-player overflow-hidden'>
            <DetailSong/>
            <ListSongs/>
          </div>
          
          <Playing/>
      </div>
    </MyContextProvider>
  )
}
