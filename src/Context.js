import { createContext, React } from 'react';
import DataSongs from './Data/songs.json'
import { useState } from 'react';



export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const dataSongs = DataSongs;
    const [idPlaying, setIdPlaying] = useState(0);
    const [isPause, setIsPause] = useState(true);
    // console.log(DataSongs)
    const value = {
      dataSongs,
      idPlaying,
      setIdPlaying,
      isPause,
      setIsPause
    }
  
    return (
      <MyContext.Provider value={value}>
        {children}
      </MyContext.Provider>
    );
  }
  
export default MyContextProvider;