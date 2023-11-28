import React, { useContext } from 'react';
import './DetailSong.css';
import { MyContext } from '../Context';
export default function DetailSong() {

  const {dataSongs, idPlaying, isPause} = useContext(MyContext)

  return (
    <div className='col-span-1'>
      <h2 className=' text-left pl-4 text-green-500 mt-2 text-xl'>Now playing</h2>
      <h2 className=' text-left pl-4 text-neutral-300 text-3xl mt-2'>{dataSongs[idPlaying].name}</h2>
      <div className='w-full h-full justify-center'>
        <div className='w-[240px] h-[240px] m-auto mt-10 rounded-full'>
          {console.log(isPause)}
          <img className={`rounded-full ${!isPause && 'rotate-animation-20s'} ${isPause && 'rotate-animation pause' }`} src={dataSongs[idPlaying].links.images[1].url} alt='avatar'/>
        </div>

        <div className='justify-center items-center mt-10 flex flex-row'>
          <img className='w-[70px] h-[70px] mr-4 rounded-full' src={dataSongs[idPlaying].links.images[0].url} alt='avatar'/>
          <span className='text-neutral-300 text-lg'>{dataSongs[idPlaying].author}</span>
        </div>
      </div> 
    </div>
  );
};

;