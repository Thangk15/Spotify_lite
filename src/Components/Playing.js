import React, {useContext} from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import './Playing.css'
import { MyContext } from '../Context';
// import 'react-h5-audio-player/src/styles.scss'

export default function Playing() {
    const {dataSongs, idPlaying, setIdPlaying, setIsPause} = useContext(MyContext)
    const handleOnPause=()=>{
        setIsPause(true)
        console.log("render")

    }
    const handleOnListen=()=>{
        setIsPause(false)
    }
    const handleOnClickNext=()=>{
        if(dataSongs.length - 1 === idPlaying)
        {
            setIdPlaying(0)
            setIsPause(true)
        }
        else
            setIdPlaying(idPlaying + 1)
    }

    const handleOnClickPrevious=()=>{
        if(idPlaying === 0)
        {
            setIdPlaying(dataSongs.length - 1)
        }
        else
            setIdPlaying(idPlaying - 1)
    }

    const handlerError=()=>{
        alert('LỖi');
        handleOnClickNext()
    }

  return (
    <div>
        <AudioPlayer 
            className='player-music' 
            src={dataSongs[idPlaying].url} layout="stacked-reverse" 
            showSkipControls={true} 
            showJumpControls={false}
            onPause={()=>handleOnPause()}
            onPlay={()=>handleOnListen()}
            onClickNext={()=>handleOnClickNext()}
            onClickPrevious={()=>handleOnClickPrevious()}
            onEnded={()=>handleOnClickNext()}
            onError={()=>handlerError()}
            // autoPlay={true}
        />
    </div>
  );
};
